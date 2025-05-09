import React from "react";

interface NavbarMenuHeaderProps {
  title: string;
  description?: string;
}

const NavbarMenuHeader = ({
  title,
  description = "No content available",
}: NavbarMenuHeaderProps) => {
  return (
    <div className="mx-10  flex flex-col gap-4   ">
      <div
        className="text-xl  custom-section-container"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default NavbarMenuHeader;
