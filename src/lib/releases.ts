export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

export interface Release {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  assets: ReleaseAsset[];
}

const REPO = 'kinthaiofficial/krouter';
const FALLBACK_TAG = 'v2.2.0';
const FALLBACK_URL = `https://github.com/${REPO}/releases/tag/${FALLBACK_TAG}`;

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const token = import.meta.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      { headers }
    );
    if (!res.ok) return null;
    return res.json() as Promise<Release>;
  } catch {
    return null;
  }
}

export function assetUrl(release: Release | null, pattern: RegExp): string {
  if (!release) return FALLBACK_URL;
  const asset = release.assets.find((a) => pattern.test(a.name));
  return asset?.browser_download_url ?? release.html_url;
}

export function releaseTag(release: Release | null): string {
  return release?.tag_name ?? FALLBACK_TAG;
}
