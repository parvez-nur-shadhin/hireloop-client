import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { BiBell, BiEnvelope } from "react-icons/bi";
import { BsHouse, BsPerson } from "react-icons/bs";
import { FaBars, FaPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";

export default function DashboardSidebar() {
  const navItems = [
    { icon: BsHouse, label: "Home", href: "/" },
    { icon: SlMagnifier, label: "Jobs", href: "/dashboard/recruiter/jobs" },
    {
      icon: FaPlus,
      label: "Add Jobs",
      href: "/dashboard/recruiter/jobs/add-jobs",
    },
    { icon: BiBell, label: "Company Profile", href: "/dashboard/recruiter/company" },

    { icon: BiEnvelope, label: "Messages", href: "/" },
    { icon: BsPerson, label: "Profile", href: "/" },
    { icon: FaGear, label: "Settings", href: "/" },
  ];

  const navComponent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <button
            key={item.label}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default cursor-pointer"
            type="button"
          >
            <item.icon className="size-5 text-muted" />
            {item.label}
          </button>
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="flex min-h-screen">
      <div className="lg:hidden">
        <Drawer>
          <Button variant="secondary">
            <FaBars />
            Menu
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>{navComponent}</Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
      <aside className="hidden lg:block w-3xs border-r border-default">
        {navComponent}
      </aside>
    </div>
  );
}
