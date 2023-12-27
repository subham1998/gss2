// pages/api/file-names.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { owner, repo, filePath, branch } = req.query;

  if (!owner || !repo || !filePath) {
    return res.status(400).json({ error: 'Missing required parameters.' });
  }

  try {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch || 'main'}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }

    const files = await response.json();
    const fileNames = files.map(file => file.name).sort((_a, _b) => { return Number(_a.split('_')[1].split('.')[0]) - Number(_b.split('_')[1].split('.')[0]) });

    console.log('File names retrieved successfully.');
    res.status(200).json({ fileNames });
  } catch (error) {
    console.error('Error fetching file names:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
