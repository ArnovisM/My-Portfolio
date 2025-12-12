import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './About.css';

const skills = [
    { name: 'UiPath', slot: 0, icon: '/skills/uipath.png' },
    { name: 'RPA Dev', slot: 1, icon: '/skills/rpa.png' },
    { name: 'C#', slot: 2, icon: '/skills/csharp.png' },
    { name: 'VB.NET', slot: 3, icon: '/skills/vbnet.png' },
    { name: 'Python', slot: 4, icon: '/skills/python.png' },
    { name: 'SQL', slot: 5, icon: '/skills/sql.png' },
    { name: 'JavaScript', slot: 6, icon: '/skills/javascript.png' },
    { name: 'React', slot: 7, icon: '/skills/react.png' },
    { name: 'Node.js', slot: 8, icon: '/skills/nodejs.png' },
    { name: 'API Int.', slot: 9, icon: '/skills/api.png' },
    { name: 'Git', slot: 10, icon: '/skills/git.png' },
    { name: 'JSON', slot: 11, icon: '/skills/json.png' },
    { name: 'Trbshoot', slot: 12, icon: '/skills/troubleshoot.png' },
];

function About() {
    return (
        <div className="screen-container about-screen">
            <Link to="/" className="back-button">
                <ArrowLeft size={24} />
            </Link>

            <h1 className="page-title">Skills & Tools</h1>

            <div className="inventory-container">
                {/* Top Section: Character & Crafting */}
                <div className="inventory-top">
                    {/* Character Panel (Left Side of Top Section) */}
                    <div className="character-panel">
                        {/* Title removed as per Minecraft Inventory standard */}
                        <div className="character-row">
                            {/* 1. Armor Slots (Left Column) */}
                            <div className="armor-slots">
                                <div className="armor-slot helmet">
                                    <img src="/diamond_helmet.png" alt="Diamond Helmet" />
                                </div>
                                <div className="armor-slot chestplate">
                                    <img src="/diamond_chestplate.png" alt="Diamond Chestplate" />
                                </div>
                                <div className="armor-slot leggings">
                                    <img src="/diamond_leggings.png" alt="Diamond Leggings" />
                                </div>
                                <div className="armor-slot boots">
                                    <img src="/diamond_boots.png" alt="Diamond Boots" />
                                </div>
                            </div>

                            {/* 2. Character Content (Center Black Box) */}
                            <div className="character-content">
                                <div className="character-preview">
                                    <div className="character-model">
                                        <img src="/skin.png" alt="Character Skin" className="character-image" />
                                    </div>
                                </div>
                            </div>

                            {/* 3. Offhand Slot (Right Column) */}
                            <div className="offhand-slot">
                                <img src="/coffee_mug.png" alt="Coffee Mug" />
                            </div>
                        </div>
                    </div>

                    {/* Crafting Grid (Right Side of Top Section) */}
                    <div className="crafting-panel">
                        <div className="crafting-title">Crafting</div>
                        <div className="crafting-area">
                            <div className="crafting-grid">
                                <div className="inventory-slot"></div>
                                <div className="inventory-slot"></div>
                                <div className="inventory-slot"></div>
                                <div className="inventory-slot"></div>
                            </div>
                            <div className="crafting-arrow">➜</div>
                            <div className="inventory-slot output-slot"></div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Main Inventory (3 rows x 9 columns = 27 slots) */}
                <div className="inventory-main">
                    <div className="inventory-grid main-grid">
                        {skills.slice(0, 27).map((skill, index) => (
                            <div key={index} className="inventory-slot filled" title={skill.name}>
                                {skill.icon ? (
                                    <img src={skill.icon} alt={skill.name} className="item-image" />
                                ) : (
                                    <div className="item-icon">{skill.name[0]}</div>
                                )}
                                {!skill.icon && <div className="item-name">{skill.name}</div>}
                            </div>
                        ))}
                        {[...Array(Math.max(0, 27 - skills.length))].map((_, i) => (
                            <div key={`empty-main-${i}`} className="inventory-slot"></div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Hotbar (1 row x 9 columns = 9 slots) */}
                <div className="inventory-hotbar">
                    <div className="inventory-grid hotbar-grid">
                        {[...Array(9)].map((_, i) => (
                            <div key={`hotbar-${i}`} className="inventory-slot"></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bio-section">
                <div className="book-page">
                    <h3>About Me</h3>
                    <p>
                        I am an <strong>Automation Developer</strong> and <strong>Web Developer</strong> focused on building efficient, scalable and intelligent solutions.
                    </p>
                    <p>
                        I combine the power of UiPath, RPA, APIs and SQL with modern web technologies like React, Node.js and Python to automate workflows and create robust web applications.
                    </p>
                    <p>
                        Experienced working with real business processes, optimizing operations, integrating systems and developing end-to-end solutions.
                    </p>
                    <p>
                        Always eager to learn new technologies, improve performance, and take on challenging problems. Let’s build something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
