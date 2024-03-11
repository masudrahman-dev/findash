import { useState } from "react";
import { Switch } from "@headlessui/react";
import clx from "../../../utils/clx";

export default function NextSwitch() {
  const [enabled, setEnabled] = useState(false);

  const handleSwitchChange = (isEnabled) => {
    setEnabled(isEnabled);
  };

  return (
    <div>
      <label htmlFor="checkbox">
        <Switch
          checked={enabled}
          onChange={handleSwitchChange}
          className={clx(
            "relative inline-flex h-6  w-10 shrink-0  cursor-pointer items-center rounded-full border  transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-gray",
            {
              "border-primary bg-white": enabled,
            },
          )}
        >
          <span
            aria-hidden="true"
            className={clx(
              "pointer-events-none ml-1 inline-block h-4 w-4 translate-x-0 transform rounded-full bg-gray   shadow-lg ring-0 transition duration-200 ease-in-out",
              {
                "translate-x-4 border-primary bg-primary": enabled,
              },
            )}
          />
        </Switch>

        <div className="hidden">
          <input
            type="checkbox"
            id="checkbox"
            checked={enabled}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>
      </label>
    </div>
  );
}
