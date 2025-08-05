import Dock from './Dock/Dock';
import resumeFile from '../assets/resume.pdf';

const DockIcon = ({ type, isActive }) => {
    
    const iconProps = {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: isActive ? "#F85002" : "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: { transition: 'all 0.3s ease' }
    };


    switch (type) {
        case 'home':
            return (
                <svg {...iconProps}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
            );
        case 'about':
            return (
                <svg {...iconProps}>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            );
        case 'experience':
            return (
                <svg {...iconProps}>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            );
        case 'skills':
            return (
                <svg {...iconProps}>
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            );
        case 'projects':
            return (
                <svg {...iconProps}>
                    <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9l-2-2H5a2 2 0 0 0-2 2z" />
                </svg>
            );

        case 'education':
            return (
                <svg {...iconProps}>
                    <path d="M22 10v6M2 8l10-5 10 5-10 5z" />
                    <path d="M6 10v6c3 4 9 3 12 0v-6" />
                </svg>
            );

        case 'contact':
            return (
                <svg {...iconProps}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            );
        case 'resume':
            return (
                <img src="./src/assets/logo.png" alt="Logo" style={{ height: '34px', width: '34px' }}/>
            );
        case 'divider':
            return (
                <div style={{ 
                    width: '1px', 
                    height: '24px', 
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    borderRadius: '0.5px',
                    margin: '0 4px',
                    pointerEvents: 'none',
                }} />
            );
        default:
            return null;
    }
};

function Navbar({activeSection, onNavigate}) {

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'PushkarAsodekarResume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navigationItems = [
        { iconType: 'home', label: 'Home', section: 'home' },
        { iconType: 'about', label: 'About', section: 'about' },
        { iconType: 'experience', label: 'Experiences', section: 'experience' },
        { iconType: 'skills', label: 'Skills & Technologies', section: 'skills' },
        { iconType: 'projects', label: 'Projects', section: 'projects' },
        { iconType: 'education', label: 'Education & Certifications', section: 'education' },
        { iconType: 'contact', label: 'Contact', section: 'contact' },
    ];

    const dockItems = [
        ...navigationItems.map(item => ({
            icon: <DockIcon type={item.iconType} isActive={activeSection === item.section} />,
            label: item.label,
            onClick: () => onNavigate(item.section),
            isActive: activeSection === item.section
        })),
        {
            icon: <DockIcon type="divider" isActive={false} />,
            label: '',
            onClick: null,
            isActive: false,
            isDivider: true,
            isInteractive: false
        },
        {
            icon: <DockIcon type="resume" isActive={false} />,
            label: 'Download Resume',
            onClick: handleResumeDownload,
            isActive: false
        }
    ];

    return (
        <Dock 
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={50}
        />
    );
}

export default Navbar;