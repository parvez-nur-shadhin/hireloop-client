

const CTA = () => {
    return (
        <div>
                  {/* CTA Section */}
      <div className="bg-[url('/cta-bg.png')] bg-cover bg-top bg-no-repeat">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Your next role is
            <br />
            already looking for you
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Build a profile in three minutes. The matches start arriving
            tomorrow morning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black font-medium px-8 py-4 rounded-2xl hover:opacity-90 transition">
              Create a free account
            </button>

            <button className="bg-[#11111A] border border-zinc-700 text-white px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
              View pricing
            </button>
          </div>
        </div>
      </div>

        </div>
    );
};

export default CTA;