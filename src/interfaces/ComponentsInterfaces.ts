export interface ProjectPreviewSingleProps {
    imageSrc: string,
    title: string,
    desc: string,
    path: string
}

export interface AppLayoutProps {
    children: React.ReactNode
}

interface ProjectItem {
    text: string;
    src: string;
}

export interface ProjectProps {
    header: string;
    desc: string;
    gitPath: string;
    videoUrl: string;
}