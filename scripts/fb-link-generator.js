const generateShareableLink = (imageURL) => {
    return `
        https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageURL)}
      `;
};

const getFacebookShareLink = (remoteUrl) => {
    const htmlContent = generateShareableLink(remoteUrl)
    return htmlContent;
}

export default getFacebookShareLink;