import React from "react";
import '../css/donationDesc.css'

const DonationDesc = () => {
  return (
    <div className="bg-red-950/70 p-12 rounded-3xl text-white">
      <h3 className="donation-desc-header">Make a Difference Today</h3>
      <p className="donation-desc-desc">
        Here at Texas Tech MSA, we strive to create a positive impact within our
        community through meaningful events, initiatives, and services. Your
        generous donations help us sustain and expand these efforts, ensuring
        that we can continue to make a difference together. Whether it’s
        supporting educational programs, organizing community events, or
        providing aid to those in need, every contribution counts. Join us in
        our mission to inspire change, foster connection, and make the world a
        better place—one donation at a time. Together, we can achieve so much
        more.
      </p>
    </div>
  );
};

export default DonationDesc;
