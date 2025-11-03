"use client";


import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import {
 Users,
 Zap,
 FileText,
 Briefcase,
 Bell,
 Search,
 CheckCircle,
 Smartphone,
 Layers,
 Terminal,
 Settings,
 Database,
 TestTube,
 HelpCircle,
 GitBranch,
 ScrollText,
 GlobeIcon,
 FolderOpen,
 ArrowRight,
} from "lucide-react";


export default function Page() {
 return (
   <>
     <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden mt-[-5rem]">
       <Image
         src="/Images/background.png"
         alt="KaziLink - Farmers & Workers Connected"
         fill
         className="object-cover brightness-[0.45] saturate-110"
         priority
       />
           <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-3 leading-tight">
               Connecting Fields With Hands
             </h1>
             <h2 className="text-3xl md:text-5xl font-extrabold text-[#E0B15E] mb-5">
               Instantly via USSD
             </h2>
             <p className="text-lg md:text-2xl text-white/90 mb-10">
               KaziLink makes hiring seasonal farm workers simple. Post jobs, get SMS notifications,
               and connect with workers through any mobile phone.
             </p>
           </div>
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
               <div className="w-1 h-3 bg-white rounded-full mt-2 text-gray-700" />
             </div>
           </div>
         </section>


         <section id ="introduction" className="bg-white rounded-xl shadow-md p-8 space-y-8n">
           <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4 mb-5 mt-6">
             <FileText className="w-8 h-8 text-amber-700" />
             Introduction
           </h2>
           <div className="grid md:grid-cols-3 gap-6 text-gray-700 text-lg">
             <div>
               <h3 className="font-bold text-xl mb-2">Purpose</h3>
               <p>KaziLink streamlines seasonal agricultural labor coordination via an accessible USSD interface.</p>
             </div>
             <div>
               <h3 className="font-bold text-xl mb-2">Scope</h3>
               <p>Covers registration, job posting, SMS alerts, browsing, and confirmation workflows.</p>
             </div>
             <div>
               <h3 className="font-bold text-xl mb-2">Users</h3>
               <p>Farmers and seasonal agricultural workers.</p>
             </div>
           </div>
         </section>


         <section id="users" className="bg-white rounded-xl shadow-md p-8 space-y-6">
           <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
             <Users className="w-8 h-8 text-green-700" />
             Who are our users?
           </h2>
           <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
             Our main users are <strong>medium and large-scale farmers</strong> and <strong>seasonal agricultural workers</strong> in rural areas.
             KaziLink empowers farmers with quick job posting and worker discovery via USSD. Workers receive job posted alerts
             and confirmation via SMS. The platform eliminates middlemen and reduces delays.
           </p>
         </section>


         <section id="ussd-screens" className="bg-white rounded-xl shadow-md p-10 space-y-12">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
             <Smartphone className="w-10 h-10 text-indigo-700" />
             USSD Screen Flow
           </h2>
           <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
             The KaziLink USSD experience is a <strong>simple, step-by-step menu</strong> that works on <strong>any feature phone</strong>.
             Below is the complete flow from dial-in to job confirmation.
           </p>
           <div className="w-full overflow-x-visible">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
               {[
                 { src: "/Images/Short code.png", alt: "Dial *384*88462#", label: "Dial the shortcode" },
                 { src: "/Images/USSD loading.png", alt: "USSD session loading", label: "Session starts" },
                 { src: "/Images/kazilink homepage.png", alt: "Main menu", label: "Main menu" },
                 { src: "/Images/farmer page.png", alt: "Farmer role selection", label: "Farmer role" },
                 { src: "/Images/worker page.png", alt: "Worker role selection", label: "Worker role" },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center">
                   <div className="relative w-48 md:w-52 lg:w-60">
                     <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl shadow-xl"></div>
                     <div className="relative bg-white rounded-3xl p-2 shadow-2xl ring-1 ring-gray-200">
                       <Image
                         src={item.src}
                         alt={item.alt}
                         width={720}
                         height={1440}
                         className="w-full h-auto rounded-2xl"
                         placeholder="blur"
                         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                       />
                     </div>
                   </div>
                   <p className="mt-4 text-base md:text-lg font-medium text-gray-800 text-center">{item.label}</p>
                 </div>
               ))}
             </div>
           </div>
         </section>


         <section id="core-features" className="bg-white rounded-xl shadow-md p-8 space-y-10">
           <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
             <Zap className="w-8 h-8 text-amber-700" />
             Core Features
           </h2>
           <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200 shadow-md">
               <div className="flex items-start gap-5">
                 <div className="p-4 bg-amber-100 rounded-xl">
                   <Briefcase className="w-8 h-8 text-amber-700" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Job Posting</h3>
                   <p className="text-lg text-gray-600">
                     Farmers post jobs with work type, date, time, wage, and number of workers needed.
                   </p>
                 </div>
               </div>
             </div>
             <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-md">
               <div className="flex items-start gap-5">
                 <div className="p-4 bg-blue-100 rounded-xl">
                   <Bell className="w-8 h-8 text-blue-700" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-3">SMS Alerts</h3>
                   <p className="text-lg text-gray-600">
                     Workers receive instant SMS when new jobs match their location.
                   </p>
                 </div>
               </div>
             </div>
             <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200 shadow-md">
               <div className="flex items-start gap-5">
                 <div className="p-4 bg-green-100 rounded-xl">
                   <Search className="w-8 h-8 text-green-700" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Job Browsing</h3>
                   <p className="text-lg text-gray-600">
                     Workers dial the shortcode to view jobs, and see wages per job.
                   </p>
                 </div>
               </div>
             </div>
             <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 shadow-md">
               <div className="flex items-start gap-5">
                 <div className="p-4 bg-purple-100 rounded-xl">
                   <CheckCircle className="w-8 h-8 text-purple-700" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Job Confirmation</h3>
                   <p className="text-lg text-gray-600">
                     Workers get full job details, contacts, and schedule via SMS.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>


         <section className="bg-white rounded-xl shadow-md p-8 space-y-6">
           <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
             <GlobeIcon className="w-8 h-8 text-blue-700" />
             Informational Website
           </h2>
           <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
             The <strong>KaziLink informational website</strong> is the digital hub for farmers, workers,
             and partners. It showcases USSD flows, SMS alerts, location-based matching, in a clean, mobile-friendly design.
           </p>
           <a
             href="https://kazilink-eight.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="block relative rounded-2xl overflow-hidden shadow-lg border border-gray-200"
           >
             <Zoom>
               <Image
                 src="/Images/background.png"
                 alt="KaziLink Informational Website"
                 width={1400}
                 height={900}
                 className="w-full h-auto object-cover"
               />
             </Zoom>
             <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
               <span className="inline-flex items-center gap-3 text-white font-bold text-xl">
                 <GlobeIcon className="w-7 h-7" />
                 KaziLink Informational Website
               </span>
             </div>
           </a>
         </section>


 
     <section id="system-overview" className="space-y-10">
       <h2 className="text-3xl font-bold text-gray-900">System Overview</h2>
       <div className="bg-white rounded-xl shadow-md p-8 space-y-6 text-lg">
         <p className="text-gray-700">
           <strong>Architecture:</strong> Django backend with REST API, USSD interface, SMS notifications, and Africa's Talking integration.
         </p>
         <p className="text-gray-700">
           <strong>Technologies:</strong> Python, Django, Django REST Framework, PostgreSQL/SQLite, Africa’s Talking (USSD), SMSLeopard.
         </p>
         <p className="text-gray-700">
           <strong>Dependencies:</strong> Python 3.12, pip packages (django, djangorestframework, python-dotenv, requests).
         </p>
       </div>
       <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
         <Zoom>
           <Image
             src="/Images/KaziLink SAD.png"
             alt="KaziLink System Architecture Diagram"
             width={1400}
             height={900}
             className="w-full h-auto object-cover"
           />
         </Zoom>
       </div>
     </section>


     <section id="ussd-flow" className="bg-white rounded-xl shadow-md p-8 space-y-8">
       <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
         <Smartphone className="w-8 h-8 text-indigo-700" />
         USSD Flow
       </h2>
       <p className="text-lg text-gray-700">
         Users access KaziLink by dialing <code className="bg-gray-100 px-2 py-1 rounded">*384*88462#</code>. The session guides them through:
       </p>
       <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 ml-6">
         <li>Role selection (Farmer / Worker)</li>
         <li>Registration with phone number</li>
         <li>Main menu: Post Job, Browse Jobs and Profile Management</li>
         <li>Job acceptance with SMS confirmation</li>
       </ol>
       <div className="space-y-6">
         <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
           <Smartphone className="w-7 h-7 text-indigo-700" />
           User Flow Diagram
         </h3>
         <div className="flex justify-center">
           <InnerImageZoom
             src="/Images/Group 26.png"
             zoomSrc="/Images/User Flows.png"
             zoomScale={2.5}
             zoomType="click"
             fullscreenOnMobile={true}
             className="w-full max-w-3xl h-auto rounded-xl shadow-lg border border-gray-200"
             width={1400}
             height={900}
           />
         </div>
         <p className="text-center text-base text-gray-600">
           USSD Session Flow: From dial-in to job confirmation
         </p>
       </div>
     </section>
    <section id="ussd-implementation" className="bg-white rounded-xl shadow-md p-10 space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
        <Smartphone className="w-10 h-10 text-green-700" />
        USSD Implementation
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
        The KaziLink USSD system provides an <strong>interactive, menu-driven interface</strong> accessible via mobile phones using the shortcode <code>*384*88462#</code>. It enables farmers and workers to engage with the platform <strong>without internet connectivity</strong>, supporting user registration, job posting, SMS alerts, job browsing, and confirmation workflows.
      </p>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>User Registration:</strong> Allows new users to register as farmers or workers by providing their name and location. Validates inputs (e.g., no special characters in names, location) and stores data in the User model with SMS confirmation.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Role-Based Functionality:</strong>
              <ul className="ml-6 mt-2 space-y-1">
                <li><strong>Farmers:</strong> Post Jobs (Planting,Weeding,Harvesting)  and, specifying work type and wage.</li>
                <li><strong>Workers:</strong> View available jobs</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Session Management:</strong> Maintains state using the <code>USSDSession</code> model, storing menu level, selection, and navigation history. Supports "0" for back navigation and "00" for main menu.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>External Integrations:</strong>
              <ul className="ml-6 mt-2 space-y-1">
                <li><strong>SMS Notifications:</strong> Sends confirmation messages for registration, job posting, job alerts and job confirmation<code> SMSLogs</code>.</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Error Handling:</strong> Validates inputs (name and location) and logs errors using Python's logging module. Clients up state sessions to prevent resource leaks.
            </div>
          </li>
        </ul>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">Architecture</h3>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Entry Point:</strong> <code>ussd/views.py</code> parses <code>sessionId</code>, <code>phoneNumber</code>, <code>serviceCode</code>, and <code>text</code>. Normalizes phone numbers to 254XXXXXXXXX format and handles registration or routes to callbacks.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Session Management:</strong> Stores state in <code>USSDSession</code> with fields like <code>level</code>, <code>previous_level</code>, <code>user_id</code>, <code>crop_id</code>, etc. Sessions are created on first interaction and deleted on completion or error.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Response Format:</strong> Returns plain text with <code>CON</code> for menus or <code>END</code> for termination.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Role-Specific Flows:</strong>
              <ul className="ml-6 mt-2 space-y-1">
                <li><strong>Farmer:</strong> Main menu (Level 1) → Post job (1.1/1.2) → Select job type (2.1/2.2).</li>
                <li><strong>Worker:</strong> Main menu (Level 1) → View available jobs (1.1/1.2) → job selection (2/3/4) → job confirmation (3/4).</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">Technical Details</h3>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Dependencies:</strong>
              <ul className="ml-6 mt-2 space-y-1">
                <li><code>django</code>, <code>djangorestframework</code>, <code>urllib</code>, <code>python-dotenv</code>, <code>requests</code>, <code>logging</code></li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Models:</strong> <code>User</code>, <code>JobListing</code>, <code>Farms</code>, <code>Applications</code>, <code>SMSLog</code>.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Libraries:</strong> <code>rest_framework</code>, <code>send_sms</code> (SMS).
            </div>
          </li>
    
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <div>
              <strong>Security:</strong> CSRF-exempt for telco requests, strict phone number validation.
            </div>
          </li>
        </ul>
      </div>


      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">Implementation Notes</h3>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <strong>Testing:</strong> Simulate requests via POST (e.g., <code>curl -X POST -d "sessionId=123&phoneNumber=254715345716&text=" http://localhost:8000/ussd/</code>). Test SMS/M-Pesa in sandbox environments.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <strong>Scalability:</strong> Lightweight sessions, automatic cleanup. Declare for precision.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <strong>Limitations:</strong> Hardcoded location (Bungoma, Trans Nzoia, Nyandarua). Future enhancements could query location dynamically.          </li>
        </ul>
      </div>




     </section>


    <section id="installation" className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
        <Terminal className="w-8 h-8 text-green-700" />
        Installation Guide
      </h2>
      <div className="space-y-8">
        <p className="text-lg text-gray-700"><strong>Prerequisites:</strong> Python 3.12+, pip, Git.</p>
        <ol className="space-y-6 text-base list-none">
          {[
            { step: "Clone the repository", code: "git clone https://github.com/your-org/kazilink.git" },
            { step: "Create virtual environment", code: "python -m venv kazilinkenv" },
            { step: "Activate environment", code: "source kazilinkenv/bin/activate  # Windows: kazilinkenv\\Scripts\\activate" },
            { step: "Install dependencies", code: "pip install -r requirements.txt" },
            { step: "Run migrations", code: "python manage.py makemigrations && python manage.py migrate" },
            { step: "Start server", code: "python manage.py runserver" }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-5">
              <span className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-lg">
                {i + 1}
              </span>
              <div className="flex-1 space-y-2">
                <p className="font-bold text-xl text-gray-900">{item.step}</p>
                <code className="block w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-lg text-sm font-mono break-all">
                  {item.code}
                </code>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>


     <section id="database" className="bg-white rounded-xl shadow-md p-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
         <Database className="w-8 h-8 text-blue-700" />
         Database Schema
       </h2>
       <p className="text-lg text-gray-700 mb-6">
         Entity-Relationship: Users to Jobs to Acceptances to Notifications.
       </p>
       <div className="w-full overflow-x-auto -mx-8 px-8">
         <div className="min-w-[1000px] bg-gray-100 rounded-xl border border-gray-300 p-6">
           <Zoom>
             <Image
               src="/Images/kazilink - erd.png"
               alt="KaziLink ERD"
               width={1400}
               height={900}
               className="w-full h-auto max-w-none"
               priority
             />
           </Zoom>
         </div>
       </div>
       <p className="mt-6 text-base text-gray-600">
         <strong>Tables:</strong> Users, Applications, JobAcceptance, SMSLog, farms.
       </p>
     </section>


     <section id="folder-structure" className="bg-white rounded-xl shadow-md p-8 space-y-10">
       <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
         <FolderOpen className="w-8 h-8 text-indigo-700" />
         Folder Structure
       </h2>
       <p className="text-lg text-gray-700">
         The project is split into two independent repositories:
       </p>
       <div className="grid md:grid-cols-2 gap-10">
         <div className="space-y-4">
           <h3 className="text-2xl font-bold text-gray-900">BACKEND</h3>
           <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-zoom-in">
             <Zoom>
               <Image
                 src="/Images/Backend folder.png"
                 alt="Backend folder structure"
                 width={1400}
                 height={1000}
                 className="w-full h-auto object-contain transition-transform hover:scale-105"
               />
             </Zoom>
           </div>
         </div>
         <div className="space-y-4">
           <h3 className="text-2xl font-bold text-gray-900">FRONTEND</h3>
           <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 cursor-zoom-in">
             <Zoom>
               <Image
                 src="/Images/Frontend folder.png"
                 alt="Informational website folder structure"
                 width={1400}
                 height={1000}
                 className="w-full h-auto object-contain transition-transform hover:scale-105"
               />
             </Zoom>
           </div>
         </div>
       </div>
       <p className="text-base text-gray-600 mt-8 text-center">
         Click any tree image to open the full-size version in a new tab.
       </p>
     </section>


     <section id="testing" className="space-y-10">
       <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
         <TestTube className="w-8 h-8 text-emerald-700" />
         Testing
       </h2>
       <div className="bg-gradient-to-b from-emerald-50 to-white rounded-2xl p-8 md:p-10 shadow-md border border-emerald-100">
         <h3 className="text-2xl font-bold text-gray-900 mb-6">Test Plan</h3>
         <p className="text-lg text-gray-700 mb-8">
           Model tests verify job creation, wage validation, and session timeouts. API tests cover CRUD operations and error handling. USSD flow tests simulate full farmer and worker journeys.
         </p>
         <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-72 flex items-center justify-center">
           <div className="text-center text-gray-500">
            
             <p className="text-lg font-medium">
               <a href="https://docs.google.com/spreadsheets/d/1CKj_Tzt9-90vb74kG-6xg2IFTw5ELSZkYpBBAWN41Hg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
               <FileText className="w-16 h-16 mx-auto text-emerald-400 mb-3" />
                 Test Cases
               </a>
             </p>
           </div>
         </div>
         <p className="mt-8 text-lg font-bold text-emerald-700">
           Results: 95% coverage, all critical paths pass.
         </p>
       </div>
     </section>


     <section id="support" className="bg-white rounded-xl shadow-md p-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
         <HelpCircle className="w-8 h-8 text-red-700" />
         Support & Maintenance
       </h2>
       <div className="grid md:grid-cols-3 gap-8 text-lg">
         <div>
           <h3 className="text-xl font-bold mb-2 text-gray-700">Troubleshooting</h3>
           <p className="text-gray-700">Check server logs, restart with <code>npm run dev</code>, verify API keys.</p>
         </div>
         <div>
           <h3 className="text-xl font-bold mb-2 text-gray-700">FAQs</h3>
           <p className="text-gray-700">How to register? Dial <code>*384*88462#</code> and follow prompts.</p>
         </div>
         <div>
           <h3 className="text-xl font-bold mb-2 text-gray-700">Contact</h3>
           <p className="text-gray-700">Email: <a href="mailto:support@kazilink.com" className="text-indigo-600 hover:underline">support@kazilink.com</a></p>
         </div>
       </div>
     </section>


     <section className="bg-white rounded-xl shadow-md p-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
         <GitBranch className="w-8 h-8 text-purple-700" />
         Change Log
       </h2>
       <ul className="space-y-3 text-lg text-gray-700">
         <li><strong>v1.0</strong>: Initial release with job posting and alerts</li>
         <li><strong>v1.1</strong>: Added worker profile and job history</li>
       </ul>
     </section>


     <section className="bg-white rounded-xl shadow-md p-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
         <ScrollText className="w-8 h-8 text-teal-700" />
         Glossary
       </h2>
       <dl className="grid md:grid-cols-2 gap-6 text-lg">
         <div>
           <dt className="font-bold text-gray-700">USSD</dt>
           <dd className="text-gray-700">Unstructured Supplementary Service Data - Mobile menu system.</dd>
         </div>
         <div>
           <dt className="font-bold text-gray-700">RLS</dt>
           <dd className="text-gray-700">Row Level Security - Database access control.</dd>
         </div>
       </dl>
     </section>




   </>
 );
}

