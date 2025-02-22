// components/FeaturesSection.js
import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeaturesSection = () => {
  return (
    <div className=" px-8 ">
      <div className="mx-auto  w-full ">
        <h2 className="text-3xl text-black font-semibold mb-12 text-center">
          Key Features
        </h2>
        <div className="text-black flex flex-wrap justify-center gap-12">
          <FeatureCard
            icon="📚"
            title="NFT Minting"
            description="Upon registration, users receive an NFT with a unique identity number. They can choose to add this NFT to their wallet instantly after signing up."
          />

          <FeatureCard
            icon="📚"
            title="Fair Elections"
            description="Eliminates biases, ensuring that all votes carry equal weight."
          />

          <FeatureCard
            icon="📚"
            title="Tokenization"
            description="Each registered voter is minted a unique NFT, acting as a digital passport to participate in elections."
          />

          <FeatureCard
            icon="📚"
            title="Proof of Ownership"
            description="NFTs provide verifiable proof of voting rights, preventing fraud and double voting."
          />
          <FeatureCard
            icon="📚"
            title="Community-Driven"
            description=" Elections can be initiated and concluded by the community, ensuring democratic control.

"
          />
          <FeatureCard
            icon="📚"
            title="Transparency"
            description=" All voting activities, including election results and moderator selections, are publicly verifiable on the blockchain."
          />
          <FeatureCard
            icon="📚"
            title="Democratic Process"
            description="Moderators are chosen through a transparent voting mechanism, ensuring accountability and fairness."
          />
          <FeatureCard
            icon="📚"
            title="Oversight"
            description="Moderators oversee the election process, ensuring compliance with established rules."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white md:w-72 w-full p-6 rounded-lg shadow-md flex flex-col items-center">
      <span className="text-4xl mb-4">{icon}</span>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-justify">{description}</p>
    </div>
  );
};

export default FeaturesSection;
