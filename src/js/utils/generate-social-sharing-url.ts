/** @format */

const facebookAppId = '620273961411218';

export function generateSocialSharingUrl(
    url: string,
    socialNetwork = '',
): string {
    const encodedUrl = encodeURIComponent(url);

    switch (socialNetwork) {
        case 'twitter':
            return `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        case 'facebook':
            return `https://www.facebook.com/dialog/share?app_id=${facebookAppId}&display=popup&href=${encodedUrl}&redirect_uri=${encodedUrl}`;
        case 'linkedin':
            return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&source=LinkedIn`;
        default:
            return url;
    }
}
