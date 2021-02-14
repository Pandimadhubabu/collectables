type Props = {
  computersTotal: Number;
  iDevicesTotal: Number;
};

const Counter = ({ computersTotal, iDevicesTotal }: Props) => (
  <section className="relative px-4 sm:px-0 md:py-16">
    <div className="absolute inset-0 bg-gray-50 h-1/2 top-1/2" />
    <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-2 lg:w-80">
      <div className="inline-block p-8 text-center">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
          <svg
            className="w-10 h-10 text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </div>
        <p className="font-bold tracking-wide text-gray-800">
          {iDevicesTotal} iDevices
        </p>
      </div>
      <div className="inline-block p-8 text-center">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
          <svg
            className="w-10 h-10 text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </div>
        <p className="font-bold tracking-wide text-gray-800">
          {computersTotal} Macs
        </p>
      </div>
    </div>
  </section>
);

export default Counter;
