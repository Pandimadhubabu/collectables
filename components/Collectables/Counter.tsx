import { MdLaptopMac, MdTabletMac } from 'react-icons/md';

type Props = {
  computersTotal: Number;
  iDevicesTotal: Number;
};

const Counter = ({ computersTotal, iDevicesTotal }: Props) => (
  <section className="relative px-4 sm:px-0 md:py-16">
    <div className="absolute inset-0 bg-gray-50 dark:bg-gray-700 h-1/2 top-1/2" />
    <div className="relative grid mx-auto overflow-hidden bg-white dark:bg-gray-600 divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-2 md:w-80">
      <div className="inline-block p-8 text-center">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 dark:bg-indigo-800">
          <MdTabletMac className="w-6 h-6 text-deep-purple-accent-400" />
        </div>
        <p className="font-bold tracking-wide text-gray-800 dark:text-gray-200">
          {iDevicesTotal} iDevices
        </p>
      </div>
      <div className="inline-block p-8 text-center">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 dark:bg-indigo-800">
          <MdLaptopMac className="w-6 h-6 text-deep-purple-accent-400" />
        </div>
        <p className="font-bold tracking-wide text-gray-800 dark:text-gray-200">
          {computersTotal} Macs
        </p>
      </div>
    </div>
  </section>
);

export default Counter;
