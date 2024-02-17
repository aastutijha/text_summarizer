<<<<<<< HEAD
import React, { useState } from "react";
import "./Styles.css";
import axios from "axios";
import Footer from "../Footer/Footer";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
=======
import React, { useState } from 'react';
import './Styles.css';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';


>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801

import Tracker from "./Tracker";
import { useHistory } from "../HistoryContext";

const TextBox = () => {
  const [summaryData, setSummaryData] = useState({});
  const [formData, setFormData] = useState("");
  const [inputWordCount, setInputWordCount] = useState(0);
  const [outputWordCount, setOutputWordCount] = useState(0);
  const [percentage, setPercentage] = useState(30);
  const [showOutput, setShowOutput] = useState(false);
  const [downloadFileName, setDownloadFileName] = useState("");

  const { addToHistory } = useHistory();

<<<<<<< HEAD
=======
 



  
>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
  const promptForFileName = () => {
    const prompt = window.prompt("Enter a file name:");
    if (prompt) {
      setDownloadFileName(prompt);
    }
  };

  const downloadTextSummary = () => {
    promptForFileName();
    if (downloadFileName) {
      const textFile = new Blob([summaryData.summary], { type: "text/plain" });
      const fileName = `${downloadFileName}.txt`;
      saveAs(textFile, fileName);
<<<<<<< HEAD
      addToHistory(summaryData.summary); // Add summary to history
=======
      
     
>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
    }
  };

  const downloadPDFSummary = () => {
<<<<<<< HEAD
    promptForFileName();
    if (downloadFileName) {
      const doc = new jsPDF();
      doc.setFontSize(12);

      const textLines = doc.splitTextToSize(
        summaryData.summary,
        doc.internal.pageSize.width - 20
      );

      textLines.forEach((line, index) => {
        doc.text(10, 10 + index * 12, line);
      });

      doc.save(`${downloadFileName}.pdf`);
      addToHistory(summaryData.summary); // Add summary to history
=======
    promptForFileName(); 
  
    if (downloadFileName) { 
      const doc = new jsPDF();
      doc.setFontSize(12); 
  
      const textLines = doc.splitTextToSize(summaryData.summary, doc.internal.pageSize.width - 20);
  
      textLines.forEach((line, index) => {
        doc.text(10, 10 + index * 12, line);
      });
  
      doc.save(`${downloadFileName}.pdf`); 
      
      
>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
    }
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", {
        rawtext: formData,
        percentage: percentage,
=======
  



  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      rawtext: formData,
      percentage: percentage,
     
    };
   
    

    axios
      .post('http://127.0.0.1:5000/analyze', data)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        setSummaryData(response.data);
        setOutputWordCount(response.data.summary.split(' ').length);
        setShowOutput(true); 
        
        
        document.getElementById('out-box').classList.add('slideInFromBottom');//animation new
      })
      .catch((error) => {
        console.error('Error sending data:', error);
>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
      });

      setSummaryData(response.data.summary);
      setOutputWordCount(response.data.summary.split(" ").length);
      setShowOutput(true);
      addToHistory(response.data.summary); // Add summary to history
    } catch (error) {
      console.error("Error sending data:", error);
    }

    console.log("DATA :", formData);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
    setInputWordCount(e.target.value.split(" ").length);
  };

  const handlePercentageChange = (e) => {
    setPercentage(e.target.value);
  };

  const handleNumSummariesChange = (value) => {
    console.log("Number of summaries changed:", value);
  };

  const handleNumTxtDownloadsChange = (value) => {
    console.log("Number of text downloads changed:", value);
  };

  const handleNumPdfDownloadsChange = (value) => {
    console.log("Number of PDF downloads changed:", value);
  };

  return (
    <div id="parent">
      <div id="txt-box">
        <form id="inp-box" onSubmit={handleSubmit}>
<<<<<<< HEAD
          <div>
            <label htmlFor="">Enter Your Text Here</label>
          </div>
          <textarea
            cols="30"
            rows="10"
            id="txt-area"
            onChange={handleChange}
          ></textarea>
          <div style={{ marginBottom: "10px" }}>
            Word Count: {inputWordCount}
          </div>
          <div style={{ marginBottom: "10px" }}>
=======
          {/* <div >
            <label htmlFor="">Enter Your Text Or Link Here</label>
          </div> */}

<div class="input-container">
<label for="input-text-or-link" >Enter Your Text Or Link Here</label>
 
</div>
          <textarea cols="30" rows="10" id="txt-area" onChange={handleChange}></textarea>
          {/* <div style={{  marginBottom: '10px' }}>Word Count: {inputWordCount}</div> */}


          <div id="wordcount-div">
  <button id="wordcount-button">Word Count: <span id="wordcount-value">{inputWordCount}</span></button>
</div>
          <div style={{  marginBottom: '10px'  }}>
>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
            <label htmlFor="">Enter Final Percentage you want</label>
          </div>
          <input
            type="number"
            min="1"
            max="99"
            value={percentage}
            onChange={handlePercentageChange}
          />
          <div id="btn">
            <button style={{ marginTop: "10px" }} type="submit">
              Summarise
            </button>
          </div>
        </form>
        {showOutput && (
          <div id="out-box">
<<<<<<< HEAD
            <div>
=======
            {/* <div >

>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
              <label htmlFor="output-area">Output</label>
            </div> */}

<div class="output-container">
<label for="input-text-or-link" >Output</label>
 
</div>
            <div id="output-area">
              <div id="content">{summaryData.summary}</div>
            </div>
<<<<<<< HEAD
            <div>Word Count: {outputWordCount}</div>
=======

            <div id="wordcount-div">
  <button id="wordcount-button">Word Count: <span id="wordcount-value">{outputWordCount}</span></button>
</div>
            {/* <div >Word Count: {outputWordCount}</div> */}

>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
            <div id="download-buttons">
              <button
                onClick={downloadTextSummary}
                style={{
                  marginRight: "10px",
                  backgroundColor: "lightblue",
                  color: "black",
                }}
              >
                Download Text
              </button>
              <button
                onClick={downloadPDFSummary}
                style={{ backgroundColor: "lightgreen", color: "black" }}
              >
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
<<<<<<< HEAD
      <Tracker
        onNumSummariesChange={handleNumSummariesChange}
        onNumTxtDownloadsChange={handleNumTxtDownloadsChange}
        onNumPdfDownloadsChange={handleNumPdfDownloadsChange}
      />
=======
      {/* <Tracker /> */}

     
>>>>>>> 6431780bc39a91ac718e1916d32d1cd0cba3d801
      <Footer />
    </div>
  );
};

export default TextBox;
