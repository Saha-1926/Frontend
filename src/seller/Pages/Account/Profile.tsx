import React, { useState } from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {

  const [editSection, setEditSection] = useState("");

  const [seller, setSeller] = useState({
    name: "Sahana",
    email: "sahana@gmail.com",
    mobile: "9876543210",
    shopName: "Hana Bazaar",
    gst: "29ABCDE1234F1Z5",
    businessType: "Individual",
    address: "Bangalore, Karnataka",
    pincode: "560001",
    bankName: "SBI",
    accountNumber: "1234567890",
    ifsc: "SBIN0001234",
  });

  const handleChange = (e: any) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditSection("");
    console.log("Updated Data:", seller);
  };

  return (
    <div className="p-6 w-full space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">Seller Account</h1>

      {/* ===== BASIC DETAILS ===== */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-600">Basic Details</h2>
          <IconButton onClick={() => setEditSection("basic")}>
            <EditIcon />
          </IconButton>
        </div>

        {editSection === "basic" ? (
          <div className="space-y-3 bg-slate-50 p-4 rounded-md">
            <TextField fullWidth name="name" label="Name" value={seller.name} onChange={handleChange} />
            <TextField fullWidth name="email" label="Email" value={seller.email} onChange={handleChange} />
            <TextField fullWidth name="mobile" label="Mobile" value={seller.mobile} onChange={handleChange} />
            <Button variant="contained" onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <div className="space-y-2 shadow-sm rounded-md overflow-hidden">
            <ProfileFieldCard keys="Name" value={seller.name} />
            <ProfileFieldCard keys="Email" value={seller.email} />
            <ProfileFieldCard keys="Mobile" value={seller.mobile} />
          </div>
        )}
      </div>

      {/* ===== BUSINESS DETAILS ===== */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-600">Business Details</h2>
          <IconButton onClick={() => setEditSection("business")}>
            <EditIcon />
          </IconButton>
        </div>

        {editSection === "business" ? (
          <div className="space-y-3 bg-slate-50 p-4 rounded-md">
            <TextField fullWidth name="shopName" label="Shop Name" value={seller.shopName} onChange={handleChange} />
            <TextField fullWidth name="gst" label="GST" value={seller.gst} onChange={handleChange} />
            <TextField fullWidth name="businessType" label="Business Type" value={seller.businessType} onChange={handleChange} />
            <Button variant="contained" onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <div className="space-y-2 shadow-sm rounded-md overflow-hidden">
            <ProfileFieldCard keys="Shop" value={seller.shopName} />
            <ProfileFieldCard keys="GST" value={seller.gst} />
            <ProfileFieldCard keys="Type" value={seller.businessType} />
          </div>
        )}
      </div>

      {/* ===== ADDRESS ===== */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-600">Address</h2>
          <IconButton onClick={() => setEditSection("address")}>
            <EditIcon />
          </IconButton>
        </div>

        {editSection === "address" ? (
          <div className="space-y-3 bg-slate-50 p-4 rounded-md">
            <TextField fullWidth name="address" label="Address" value={seller.address} onChange={handleChange} />
            <TextField fullWidth name="pincode" label="Pincode" value={seller.pincode} onChange={handleChange} />
            <Button variant="contained" onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <div className="space-y-2 shadow-sm rounded-md overflow-hidden">
            <ProfileFieldCard keys="Address" value={seller.address} />
            <ProfileFieldCard keys="Pincode" value={seller.pincode} />
          </div>
        )}
      </div>

      {/* ===== BANK DETAILS ===== */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-600">Bank Details</h2>
          <IconButton onClick={() => setEditSection("bank")}>
            <EditIcon />
          </IconButton>
        </div>

        {editSection === "bank" ? (
          <div className="space-y-3 bg-slate-50 p-4 rounded-md">
            <TextField fullWidth name="bankName" label="Bank" value={seller.bankName} onChange={handleChange} />
            <TextField fullWidth name="accountNumber" label="Account Number" value={seller.accountNumber} onChange={handleChange} />
            <TextField fullWidth name="ifsc" label="IFSC" value={seller.ifsc} onChange={handleChange} />
            <Button variant="contained" onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <div className="space-y-2 shadow-sm rounded-md overflow-hidden">
            <ProfileFieldCard keys="Bank" value={seller.bankName} />
            <ProfileFieldCard keys="Account" value={seller.accountNumber} />
            <ProfileFieldCard keys="IFSC" value={seller.ifsc} />
          </div>
        )}
      </div>

    </div>
  );
};

export default Profile;