import { Button, ProgressBar, Text, type Theme } from "@fluentui/react-components";
import {
    AddRegular,
    ArchiveRegular,
    ArrowSquareUpRight24Filled,
    BinRecycleRegular,
    ChevronDownRegular,
    ChevronRightRegular,
    DraftsRegular,
    FireRegular,
    MailRegular,
    StarRegular,
} from "@fluentui/react-icons";
import {
    NavDrawerBody,
    NavItem,
    NavSectionHeader,
} from "@fluentui/react-nav-preview";
import { useState } from 'react';

export const Sidebar = ({ theme }: { theme: Theme }) => {
    const [selectedItem, setSelectedItem] = useState("inbox");
    const [isExpanded, setIsExpanded] = useState(false);

    const navItemStyle = (isSelected: boolean) => ({
        backgroundColor: isSelected ? theme.colorNeutralBackground3 : 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        padding: '6px 8px',
        border: 'none',
        cursor: 'pointer',
        color: theme.colorNeutralForeground1,
        fontSize: '14px',
        fontWeight: isSelected ? '600' : 'normal',
        marginBottom: '2px',
        transition: 'all 0.1s ease-in-out',
        ':hover': {
            backgroundColor: theme.colorNeutralBackground2
        }
    });

    const iconStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        fontSize: '20px',
        flexShrink: 0,
        marginRight: '0px'
    };

    const linkDestination = "https://www.bing.com";

    return (
        <div
            style={{
                height: "100%",
                width: 200,
                display: "flex",
                flexDirection: "column",
                borderRightWidth: 1,
                borderRightColor: theme.colorNeutralStroke3,
                borderRightStyle: "solid",
                gap: 10,
                padding: 20,
                boxSizing: "border-box",
                flexShrink: 0,
            }}
        >
            <Button icon={<AddRegular />}>New message</Button>
            <div style={{ flexGrow: 1 }}>
                <NavDrawerBody style={{ padding: 0 }}>
                    <NavItem as="button" value="inbox" onClick={() => setSelectedItem("inbox")} icon={<div style={iconStyle}><MailRegular /></div>} style={navItemStyle(selectedItem === "inbox")}>Inbox</NavItem>
                    <NavItem as="button" value="drafts" onClick={() => setSelectedItem("drafts")} icon={<div style={iconStyle}><DraftsRegular /></div>} style={navItemStyle(selectedItem === "drafts")}>Drafts</NavItem>
                    <NavItem as="button" value="sent" onClick={() => setSelectedItem("sent")} icon={<div style={iconStyle}><ArrowSquareUpRight24Filled /></div>} style={navItemStyle(selectedItem === "sent")}>Sent</NavItem>
                    <NavItem as="button" value="starred" onClick={() => setSelectedItem("starred")} icon={<div style={iconStyle}><StarRegular /></div>} style={navItemStyle(selectedItem === "starred")}>Starred</NavItem>
                    <NavItem as="button" value="archive" onClick={() => setSelectedItem("archive")} icon={<div style={iconStyle}><ArchiveRegular /></div>} style={navItemStyle(selectedItem === "archive")}>Archive</NavItem>
                    <NavItem as="button" value="spam" onClick={() => setSelectedItem("spam")} icon={<div style={iconStyle}><FireRegular /></div>} style={navItemStyle(selectedItem === "spam")}>Spam</NavItem>
                    <NavItem as="button" value="trash" onClick={() => setSelectedItem("trash")} icon={<div style={iconStyle}><BinRecycleRegular /></div>} style={navItemStyle(selectedItem === "trash")}>Trash</NavItem>
                    
                    <NavSectionHeader style={{ marginTop: '20px', padding: '0 8px', color: theme.colorNeutralForeground1 }}>
                        Employee Management
                    </NavSectionHeader>
                    <div 
                        style={{ 
                            cursor: 'pointer',
                            padding: '6px 8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? <ChevronDownRegular /> : <ChevronRightRegular />}
                        <span style={{ color: theme.colorNeutralForeground1 }}>Postings</span>
                    </div>
                    {isExpanded && (
                        <div style={{ paddingLeft: '24px' }}>
                            <NavItem 
                                as="a" 
                                href={linkDestination}
                                target="_blank"
                                value="openings"
                                style={navItemStyle(selectedItem === "openings")}
                                onClick={() => setSelectedItem("openings")}
                            >
                                Openings
                            </NavItem>
                            <NavItem 
                                as="a" 
                                href={linkDestination}
                                target="_blank"
                                value="submissions"
                                style={navItemStyle(selectedItem === "submissions")}
                                onClick={() => setSelectedItem("submissions")}
                            >
                                Submissions
                            </NavItem>
                        </div>
                    )}
                </NavDrawerBody>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <ProgressBar value={0.7} />
                <Text size={200}>700.00 MB / 1.00 GB used</Text>
            </div>
        </div>
    );
};
