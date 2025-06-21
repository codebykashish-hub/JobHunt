import React, { useState } from 'react';

const JobPrefForm = ({ onSubmit }) => {
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [exp, setExp] = useState('');
    const [keywords, setKeywords] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            jobType,
            location,
            exp,
            keywords: keywords.split(',')
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Job Type</label>
                <input type="text" value={jobType} onChange={(e) => setJobType(e.target.value)} />
            </div>
            <div>
                <label>Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div>
                <label>Experience</label>
                <input type="text" value={exp} onChange={(e) => setExp(e.target.value)} />
            </div>
            <div>
                <label>Keywords</label>
                <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
            </div>
            <button type="submit">Save Preferences</button>
        </form>
    );
};

export default JobPrefForm;
