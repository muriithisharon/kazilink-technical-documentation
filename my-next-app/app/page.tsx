'use client';

import Image from 'next/image';
import {
  Users,
  Zap,
  Layout,
  Database,
  Settings,
  Shield,
  Beaker,
  HelpCircle,
  GitBranch,
  ScrollText,
  Terminal,
  Code2,
  Cpu,
  FileText,
  Globe as GlobeIcon,
  Smartphone,
  Layers,
  TestTube,
  BookOpen,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8 space-y-12">

      <section id="introduction"  className="relative rounded-xl overflow-hidden p-8 text-white shadow-lg bg-gradient-to-r from-[#3D1700] via-[#a06b3f] to-[#E0B15E] py-12 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">KaziLink Platform</h1>
          <p className="text-lg opacity-90">
            A USSD-based labor coordination platform designed to connect farmers with workers during peak
            agricultural seasons including planting, weeding, and harvesting.
          </p>
        </div>
      </section>

      <section id="introduction" className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <FileText className="w-6 h-6 text-amber-700" />
          Introduction
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Purpose</h3>
            <p>KaziLink aims to streamline seasonal agricultural labor coordination by providing an accessible USSD interface for farmers and workers.</p>
          </div>
          <div>
            <h3 className="font-semibold">Scope</h3>
            <p>Covers user registration, job posting, real-time alerts, job browsing, and confirmation workflows.</p>
          </div>
          <div>
            <h3 className="font-semibold">Users</h3>
            <p>Farmers, agricultural workers, administrators, and developers maintaining the system.</p>
          </div>
        </div>
      </section>

      <section id="users" className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Users className="w-6 h-6 text-green-700" />
          Who are our users?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our main users are <strong>medium and large-scale farmers</strong> and <strong>seasonal agricultural workers</strong> in rural areas. 
          KaziLink empowers farmers by enabling quick job posting and worker discovery via USSD. Workers gain access to real-time job alerts 
          and confirmation via SMS. The platform eliminates middlemen, reduces coordination delays, and ensures fair wage transparency.
        </p>
      </section>

      <section id="system-overview" className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900">System Overview</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          <p className="text-gray-700">
            <strong>Architecture:</strong> Django backend with REST API, USSD interface, SMS notifications, and Africa's Talking integration.
          </p>
          <p className="text-gray-700">
            <strong>Technologies:</strong> Python, Django, Django REST Framework, PostgreSQL/SQLite, Africa’s Talking (USSD), SMSLeopard for SMS.
          </p>
          <p className="text-gray-700">
            <strong>Dependencies:</strong> Python 3.12, pip packages (django, djangorestframework, python-dotenv, requests).
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200">
          <Image
            src="/images/KaziLink SAD.png"
            alt="KaziLink System Architecture Diagram"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section id="ussd-flow" className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Smartphone className="w-6 h-6 text-indigo-700" />
          USSD Flow
        </h2>
        <p className="text-gray-700">
          Users access KaziLink by dialing <code>*384*88462#</code>. The USSD session guides them through:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
          <li>Role selection (Farmer / Worker)</li>
          <li>Registration with phone number</li>
          <li>Main menu: Post Job, Browse Jobs, Profile, Alerts</li>
          <li>Job acceptance with SMS confirmation</li>
        </ol>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-mono text-gray-800">*384*88462# → 1. Farmer → Enter Name → Job Posted!</p>
        </div>
      </section>

      <section id="architecture" className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Layers className="w-6 h-6 text-teal-700" />
          Architecture
        </h2>
        <p className="text-gray-700">
          KaziLink follows a modular, scalable architecture:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li><strong>Frontend:</strong> USSD (Africa’s Talking), SMS (SMSLeopard)</li>
          <li><strong>Backend:</strong> Django + DRF (REST API)</li>
          <li><strong>Database:</strong> PostgreSQL (production), SQLite (dev)</li>
          <li><strong>Hosting:</strong> Docker + Railway / Render</li>
          <li><strong>Security:</strong> JWT, RLS, rate limiting</li>
        </ul>
   
      </section>

      <section id="installation" className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <Terminal className="w-6 h-6 text-green-700" />
          Installation Guide
        </h2>
        <div className="space-y-6">
          <p className="text-gray-700"><strong>Prerequisites:</strong> Python 3.12+, pip, Git.</p>
          <ol className="space-y-4 text-sm list-none">
            {[
              { step: "Clone the repository", code: "git clone https://github.com/your-org/kazilink.git" },
              { step: "Create virtual environment", code: "python -m venv kazilinkenv" },
              { step: "Activate environment", code: "source kazilinkenv/bin/activate  # Windows: kazilinkenv\\Scripts\\activate" },
              { step: "Install dependencies", code: "pip install -r requirements.txt" },
              { step: "Run migrations", code: "python manage.py makemigrations && python manage.py migrate" },
              { step: "Start server", code: "python manage.py runserver" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div className="flex-1 space-y-1">
                  <p className="font-medium text-gray-900">{item.step}</p>
                  <code className="block w-full bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-xs font-mono break-all">
                    {item.code}
                  </code>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="configuration" className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <Settings className="w-6 h-6 text-purple-700" />
          Configuration Guide
        </h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>Parameters:</strong> Update <code>.env</code> with database URL, Africa’s Talking API keys, and session settings.</p>
          <p><strong>Environment Setup:</strong> Create <code>.env</code> file with:</p>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`DATABASE_URL=postgresql://...
AT_USERNAME=your_username
AT_API_KEY=your_api_key
USSD_SHORTCODE=*384*88462#`}
          </pre>
          <p><strong>External Service Integration:</strong> Africa’s Talking for USSD and SMS.</p>
        </div>
      </section>

      <section id="api" className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">API Documentation</h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">Endpoints</h3>
            {[
              { method: "GET",  path: "/api/jobs",   desc: "List available jobs" },
              { method: "POST", path: "/api/jobs",   desc: "Create job posting" },
              { method: "POST", path: "/api/accept", desc: "Worker accepts job" }
            ].map((ep, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-medium text-white ${ep.method === "GET" ? "bg-green-600" : "bg-blue-600"}`}>
                    {ep.method}
                  </span>
                  <code className="font-mono text-sm text-gray-800">{ep.path}</code>
                </div>
                <span className="text-sm text-gray-600">{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="database" className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <Database className="w-6 h-6 text-blue-700" />
          Database Schema
        </h2>
        <p className="text-gray-700 mb-4">Entity-Relationship: Users → Jobs → Acceptances → Notifications.</p>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center">
          <Image
            src="/images/kazilink - erd.png"
            alt="KaziLink ERD"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Tables:</strong> Users, Applications, JobAcceptance, SMSLog, farms.
        </p>
      </section>

      <section id="testing" className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <TestTube className="w-6 h-6 text-emerald-700" />
          Testing
        </h2>
        <div className="bg-gradient-to-b from-emerald-50 to-white rounded-xl p-6 md:p-8 shadow-sm border border-emerald-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Test Plan</h3>
          <p className="text-gray-700 mb-6">
            Model tests verify job creation, wage validation, and session timeouts. API tests cover CRUD operations and error handling. USSD flow tests simulate full farmer and worker journeys.
          </p>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <FileText className="w-12 h-12 mx-auto text-emerald-400 mb-2" />
              <p className="text-sm font-medium">
                <a href="https://docs.google.com/spreadsheets/d/1CKj_Tzt9-90vb74kG-6xg2IFTw5ELSZkYpBBAWN41Hg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Test Cases
                </a>
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm font-medium text-emerald-700">
            Results: 95% coverage, all critical paths pass.
          </p>
        </div>
      </section>

      <section id="support" className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-red-700" />
          Support & Maintenance
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Troubleshooting</h3>
            <p className="text-gray-700">Check server logs, restart with <code>npm run dev</code>, verify API keys.</p>
          </div>
          <div>
            <h3 className="font-semibold">FAQs</h3>
            <p className="text-gray-700">How to register? Dial <code>*384*88462#</code> and follow prompts.</p>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="text-gray-700">Email: <a href="mailto:support@kazilink.com" className="text-indigo-600">support@kazilink.com</a></p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <GitBranch className="w-6 h-6 text-purple-700" />
          Change Log
        </h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>v1.0</strong>: Initial release with job posting and alerts</li>
          <li><strong>v1.1</strong>: Added worker profile and job history</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
          <ScrollText className="w-6 h-6 text-teal-700" />
          Glossary
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-semibold">USSD</dt>
            <dd className="text-gray-700">Unstructured Supplementary Service Data - Mobile menu system.</dd>
          </div>
          <div>
            <dt className="font-semibold">RLS</dt>
            <dd className="text-gray-700">Row Level Security - Database access control.</dd>
          </div>
        </dl>
      </section>

    </div>
  );
}