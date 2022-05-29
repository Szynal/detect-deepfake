import React, { useState } from "react";
import AWS from "aws-sdk";

require("dotenv").config();

const bucket = `${process.env.REACT_APP_S3_BUCKET}`;
const region = `${process.env.REACT_APP_S3_REGION}`;
const accessKeyId = `${process.env.REACT_APP_API_KEY_YT}`;
const secretAccessKey = `${process.env.REACT_APP_S3_SECRET_ACCESS_KEY}`;

const myBucket = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4"
});

const UploadImageToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: bucket,
      Key: file.name
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
  );
};

export default UploadImageToS3WithNativeSdk;
