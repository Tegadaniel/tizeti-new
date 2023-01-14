import React from 'react';
import Button from '../../components/ui/Button';
import { States } from '../../constants/data';

const InstallationCounter = () => {
  const statesArray = Object.keys(States);

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl text-black">
          {statesArray.length} States
        </span>
        <Button color="neutral">Download</Button>
      </div>
      <div className="flex flex-wrap gap-[100px]">
        {statesArray.map((key) => (
          <div className="flex-none w-[45%]" key={key}>
            <div>
              <div className="flex items-center justify-between mt-9">
                <span className="font-bold text-xl text-black-300 capitalize">{key}</span>
                <span className="text-gray-600 text-xs">Sept 27, 2022</span>
              </div>
              <hr className="my-4 border-[#E0E0E0]" />
              <div className="flex justify-between w-1/2">
                <div className="flex flex-col gap-4 text-gray-600 text-sm">
                  <div>Total Number of Installations</div>
                  <div>Pending Installs</div>
                  <div>Today Installations</div>
                  <div>No LOS</div>
                </div>
                <div className="flex flex-col gap-4 font-medium text-sm text-black-300">
                  <div>{States[key].no_of_installations}</div>
                  <div>{States[key].pending_installations}</div>
                  <div>{States[key].today_installations}</div>
                  <div>{States[key].no_los}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InstallationCounter;
