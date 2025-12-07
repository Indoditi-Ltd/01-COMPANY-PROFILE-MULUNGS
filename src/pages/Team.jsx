import React from 'react';
import { User } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';

const Team = () => {
    const team = [
        { name: "Nama CEO", role: "Chief Executive Officer", bg: "bg-blue-100" },
        { name: "Nama CTO", role: "Chief Technology Officer", bg: "bg-cyan-100" },
        { name: "Manager Finance", role: "Finance Manager", bg: "bg-green-100" },
        { name: "Trainer HR", role: "Trainer HR Mitra", bg: "bg-purple-100" },
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Tim Kami</h1>
                    <p className="text-slate-600">Orang-orang di balik perubahan</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <Card key={idx} className="text-center p-6 group hover:translate-y-[-5px]">
                            <div className={`w-32 h-32 mx-auto rounded-full ${member.bg} flex items-center justify-center mb-6 text-slate-500 group-hover:scale-110 transition-transform`}>
                                <User size={64} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Team;
