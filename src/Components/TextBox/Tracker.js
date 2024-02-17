

import React, { useState, useEffect } from 'react';

const Tracker = ({ onNumSummariesChange, onNumTxtDownloadsChange, onNumPdfDownloadsChange }) => {
  const [numSummaries, setNumSummaries] = useState(0);
  const [numTxtDownloads, setNumTxtDownloads] = useState(0);
  const [numPdfDownloads, setNumPdfDownloads] = useState(0);

  useEffect(() => {
    onNumSummariesChange(numSummaries);
  }, [numSummaries, onNumSummariesChange]);

  useEffect(() => {
    onNumTxtDownloadsChange(numTxtDownloads);
  }, [numTxtDownloads, onNumTxtDownloadsChange]);

  useEffect(() => {
    onNumPdfDownloadsChange(numPdfDownloads);
  }, [numPdfDownloads, onNumPdfDownloadsChange]);

  const incrementNumSummaries = () => {
    setNumSummaries(numSummaries + 1);
  };

  const incrementTxtDownloads = () => {
    setNumTxtDownloads(numTxtDownloads + 1);
  };

  const incrementPdfDownloads = () => {
    setNumPdfDownloads(numPdfDownloads + 1);
  };

  return (
    <div>
      <p>Number of summaries: {numSummaries}</p>
      <p>Number of text downloads: {numTxtDownloads}</p>
      <p>Number of PDF downloads: {numPdfDownloads}</p>
    </div>
  );
};

export default Tracker;
