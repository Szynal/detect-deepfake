import React, { useState } from "react";
import AWS from "aws-sdk";
import { MDBRow, MDBCardBody } from "mdbreact";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

require("dotenv").config();

const bucket = `scandeepfake`;
const region = `eu-central-1`;
const accessKeyId = `AKIASDLK7ISXTLTRTZVY`;
const secretAccessKey = `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`;

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
      <input type="file" onChange={handleFileInput} />
      <MDBRow />
      <MDBCardBody className="text-center"></MDBCardBody>

      <MDBProgress>
        <MDBProgressBar
          striped
          animated
          width={progress}
          valuemin={0}
          valuemax={100}
        />
      </MDBProgress>
      <MDBCardBody className="text-center"></MDBCardBody>
      <MDBRow />
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
      <MDBCardBody className="text-center"></MDBCardBody>
      <h2 className="h2-responsive mb-4">
        <strong className="font-weight-bold">Under development</strong>
      </h2>
    </div>
  );
};

export default UploadImageToS3WithNativeSdk;
