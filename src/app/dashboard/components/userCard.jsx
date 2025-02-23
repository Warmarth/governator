"use client";
import React from "react";
import Image from "next/image";
import { FaCopy, FaGithub, FaTwitter } from "react-icons/fa";

const Card = ({ user }) => {
  const { imageUrl, username, id, kycStatus } = user;

  const isVerfy = (status) => {
    return status === "verified";
  };

  const copyText = (id) => {
    window.navigator.clipboard.writeText(id);
    alert("Copied to clipboard");
  };

  const isKycVerified = isVerfy(kycStatus);

  return (
    <div className="flex flex-col md:flex-row p-4 bg-orange-300 rounded-lg shadow-md w-full md:w-96 gap-3">
      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt={username}
        className="w-20 h-20 rounded-full object-cover"
      />

      <article className="text-gray-500">
        <h2>Username: {username}</h2>
        <p className="inline-flex items-center gap-2">
          ID: {id}
          <span
            onClick={() => copyText(id)}
            className="w-2 h-2 cursor-pointer mb-auto"
          >
            <FaCopy className="w-full" />
          </span>
        </p>
        <p>
          KYC Status:{" "}
          <span className={isKycVerified ? "text-danger" : "text-success"}>
            {isKycVerified ? "Not Verified" : "Verified"}
          </span>
        </p>
      </article>

      <span className="inline-flex gap-2 items-end justify-end ml-auto">
        <FaGithub className="text-gray-700 hover:text-gray-900" />
        <FaTwitter className="text-gray-700 hover:text-gray-900" />
      </span>
    </div>
  );
};

export default Card;
