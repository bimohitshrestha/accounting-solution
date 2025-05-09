import Link from "next/link";
import { ReactNode } from "react";

interface SocialLink {
  href: string;
  icon: ReactNode;
  value: string;
}

interface Social {
  href: string;
  icon: ReactNode;
  label: string;
}

interface ContactDetailsProps {
  socialLinks: SocialLink[];
  social: Social[];
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  socialLinks,
  social,
}) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-start m-2 md:mx-10">
      <h5 className="text-primary capitalize text-2xl font-semibold mb-6 underline">
        Chartered
      </h5>
      {socialLinks.map((data, index) => (
        <div
          className="flex items-start gap-4 text-lg justify-center mb-2"
          key={index}
        >
          {data.icon}
          <span>{data.value}</span>
        </div>
      ))}
      <div className="flex flex-wrap justify-center gap-3 mt-15">
        {social.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
