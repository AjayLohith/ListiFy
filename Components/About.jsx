import React from 'react';

const About = () => {
    return (
        <section className="px-4 py-8">
            <h2 className="text-3xl font-bold text-[#2C3639] mb-4">About ListiFy</h2>
            <p className="text-[#2C3639]">
                ListiFy is a lightweight and intuitive To-Do application built with Next.js, React, and Tailwind CSS.<br /><br />
                Designed for simplicity and efficiency, it enables users to seamlessly add, complete, and delete tasks while maintaining a clean, distraction-free interface.
            </p>
            <p className="text-[#2C3639] mt-4">
                <strong>Key Features</strong><br />
                ✅ Fast & Responsive – Built with modern web technologies for smooth performance across devices.<br />
                🎨 Minimalistic UI – A clean, user-friendly design that keeps you focused on what matters.<br />
                📌 Task Management – Easily create, edit, mark as complete, and delete tasks in just a few clicks.<br />
                🌙 Dark Mode Support – Enjoy a comfortable viewing experience, day or night.<br />
                📡 Cloud Sync (Coming Soon!) – Keep your tasks in sync across multiple devices.
            </p>
            <p className="text-[#2C3639] mt-4">
                ListiFy is perfect for anyone looking for a no-frills, high-performance task manager to stay organized and productive. 🚀
            </p>
        </section>
    );
};

export default About;