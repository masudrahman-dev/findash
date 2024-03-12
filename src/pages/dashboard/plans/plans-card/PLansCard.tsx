import React from "react";
import IconWrapper from "../../../../components/icons/IconWrapper";
import carIcon from "../../../../assets/icons/car.svg";

interface PlansCardProps {
  src?: string;
  alt?: string;
  label?: string;
  amount?: string;
}

const PlansCard: React.FC<PlansCardProps> = ({ src, alt, label, amount }) => {
  return (
    <div className="w-[151px] rounded-xl border border-silver p-5">
      <IconWrapper iconWrapperStyle="bg-silver bg-opacity-100">
        <img src={src ? src : carIcon} alt={alt} />
      </IconWrapper>
      <div className="pt-5">
        <p className="text-base font-semibold">{label ? label : "New Car"}</p>
        <p className="text-medium text-gray">${amount ? amount : "5.000,00"}</p>
      </div>
    </div>
  );
};

export default PlansCard;
