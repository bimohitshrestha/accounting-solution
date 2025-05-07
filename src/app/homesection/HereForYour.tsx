import AccountCard from "@/component/card/AccountCard";
import ParagraphHeader from "@/component/header/ParagraphHeader";

const HereForYou = () => {
  return (
    <div className="  max-w-lvw mx-auto border-t-2 border-black mb-6">
      <main className="container mx-auto px-4 py-8">
        <ParagraphHeader
          title="We Are Here For Your"
          description="  We offer Accounting, Taxation And Bookkeeping Services for our
            clients in Melbourne's Outer Eastern Suburbs. With a wealth of
            experience, and depth of knowledge, across a wide range of sectors,
            TAS will work with you to determine the best path forward for your
            business."
          className="text-lg text-gray-700 max-w-max mx-auto"
        />

        <AccountCard />
      </main>
    </div>
  );
};

export default HereForYou;
