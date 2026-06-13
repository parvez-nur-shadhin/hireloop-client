"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  Form,
  Fieldset,
  TextField,
  Label,
  Input,
  Button,
  Select,
  ListBox,
  FieldError,
  TextArea,
} from "@heroui/react";

import { ChevronDown, Globe, ArrowUpToLine } from "lucide-react";
import { addCompanies } from "@/lib/actions/jobs";
import { toast } from "react-toastify";

export default function CompanyForm({ company = null }) {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: company?.name || "",
      industry: company?.industry || "technology",
      websiteUrl: company?.websiteUrl || "",
      location: company?.location || "",
      employeeCount: company?.employeeCount || "1-10",
      description: company?.description || "",
      logo: company?.logo || "",
    },
  });

  const [isUploading, setIsUploading] = useState(false);
  const [logoUrl, setLogoUrl] = useState(company?.logo || "");

  // ✅ ImgBB Upload
  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!data?.data?.url) {
      throw new Error("Image upload failed");
    }

    return data.data.url;
  };

  // ✅ Handle logo upload
  const handleLogoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

      const url = await uploadToImgBB(file);

      setLogoUrl(url);

      // ✅ store inside React Hook Form
      setValue("logo", url, { shouldValidate: true });
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  // ✅ Submit
  const onSubmit = async(data) => {
    console.log("FINAL FORM DATA:", data);
    // send to backend here

    const res = await addCompanies(data);

    if(res.insertedId){
        toast.success("The company got inserted!")
    }

  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 p-5"
      validationBehavior="aria"
      validationErrors={errors}
    >
      <Fieldset className="space-y-6 w-full">
        <legend className="text-xl font-semibold text-zinc-200 border-b border-zinc-900 w-full pb-3 mb-2">
          {company ? "Update Company Profile" : "Configure Workspace Platform"}
        </legend>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField className="flex flex-col gap-1 w-full">
            <Label className="text-zinc-400 font-medium text-sm">
              Company Name
            </Label>
            <Input
              placeholder="e.g. Acme Corp"
              {...register("companyName", { required: "Required" })}
            />
            <FieldError>{errors.companyName?.message}</FieldError>
          </TextField>

          {/* Industry */}
          <Controller
            name="industry"
            control={control}
            render={({ field }) => (
              <Select
                selectedKeys={[field.value]}
                onSelectionChange={(val) =>
                  field.onChange(Array.from(val)[0])
                }
              >
                <Label className="text-zinc-400 text-sm mb-1">
                  Industry / Category
                </Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator>
                    <ChevronDown size={16} />
                  </Select.Indicator>
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="technology">Technology</ListBox.Item>
                    <ListBox.Item id="design">Design</ListBox.Item>
                    <ListBox.Item id="marketing">Marketing</ListBox.Item>
                    <ListBox.Item id="finance">Finance</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            )}
          />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField className="flex flex-col gap-1 w-full">
            <Label className="text-zinc-400 text-sm">Website URL</Label>
            <Input
              placeholder="www.company.com"
              {...register("websiteUrl")}
            />
          </TextField>

          <TextField className="flex flex-col gap-1 w-full">
            <Label className="text-zinc-400 text-sm">Location</Label>
            <Input placeholder="City, Country" {...register("location")} />
          </TextField>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employee Count */}
          <Controller
            name="employeeCount"
            control={control}
            render={({ field }) => (
              <Select
                selectedKeys={[field.value]}
                onSelectionChange={(val) =>
                  field.onChange(Array.from(val)[0])
                }
              >
                <Label className="text-zinc-400 text-sm mb-1">
                  Employee Count Range
                </Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator>
                    <ChevronDown size={16} />
                  </Select.Indicator>
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="1-10">1-10</ListBox.Item>
                    <ListBox.Item id="11-50">11-50</ListBox.Item>
                    <ListBox.Item id="51-200">51-200</ListBox.Item>
                    <ListBox.Item id="201+">201+</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            )}
          />

          {/* Logo Upload */}
          <div className="flex flex-col gap-1">
            <span className="text-zinc-400 text-sm">Company Logo</span>

            <div className="flex items-center gap-4">
              <label className="w-14 h-14 border border-dashed border-zinc-700 rounded-xl flex items-center justify-center cursor-pointer relative overflow-hidden">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleLogoUpload}
                  className="hidden"
                />

                {logoUrl ? (
                  <img
                    src={logoUrl}
                    className="w-full h-full object-cover"
                    alt="logo"
                  />
                ) : (
                  <ArrowUpToLine size={18} />
                )}
              </label>

              <div>
                <p className="text-sm text-zinc-300">
                  {isUploading ? "Uploading..." : "Upload image"}
                </p>
                <p className="text-xs text-zinc-600">
                  PNG, JPG up to 5MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <TextField className="flex flex-col gap-1 w-full">
          <Label className="text-zinc-400 text-sm">
            Brief Description
          </Label>

          <TextArea
            rows={4}
            placeholder="Tell us about your company..."
            {...register("description")}
          />
        </TextField>
      </Fieldset>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3 pt-5 border-t border-zinc-900">
        <Button type="submit">
          {company ? "Save Updates" : "Complete Setup"}
        </Button>
      </div>
    </Form>
  );
}