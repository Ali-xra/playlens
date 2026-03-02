
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MOCK_GAMES } from '../../../mocks/mockData';
import Button from '../../../components/UI/Button';
import { 
  ClipboardCheck, 
  ArrowRight, 
  Check, 
  Eye,
  Box,
  Layers,
  Activity,
  FileText,
  X as CloseIcon,
  Info,
  BookOpen,
  Target,
  User,
  Settings
} from 'lucide-react';

const AssessmentFlow: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const game = MOCK_GAMES.find(g => g.id === gameId);
  
  // Steps: 1=Materials, 2=Setup, 3=Execution, 4=Reporting, 5=Complete
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!game) {
    return <div className="p-8">Assessment not found.</div>;
  }

  const handleNext = () => setStep(prev => prev + 1);

  const handleInputChange = (questionId: string, value: any) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API save
    setTimeout(() => {
        setIsSubmitting(false);
        setStep(5); // Complete
    }, 1500);
  };

  // --- STEP 1: MATERIALS ---
  const MaterialsView = () => (
    <div className="max-w-xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4">
       <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
           <Box className="w-8 h-8" />
       </div>
       <h2 className="text-2xl font-heading font-bold text-dark mb-4">Step 1: Gather Materials</h2>
       <p className="text-gray-600 mb-8">Before we begin, please ensure you have the following items ready.</p>
       
       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-left mb-8">
           <ul className="space-y-4">
               {game.materials?.map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                       <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                           <Check className="w-4 h-4" />
                       </div>
                       <span className="text-dark font-medium">{item}</span>
                   </li>
               ))}
               {!game.materials && <li>No specific materials required.</li>}
           </ul>
       </div>

       <Button variant="primary" size="lg" className="w-full" onClick={handleNext} rightIcon={<ArrowRight className="w-5 h-5" />}>
           I Have These Items
       </Button>
    </div>
  );

  // --- STEP 2: SETUP ---
  const SetupView = () => (
      <div className="max-w-xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4">
        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Layers className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-dark mb-4">Step 2: Environment Setup</h2>
        <p className="text-gray-600 mb-8">Prepare the space before inviting your child.</p>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-left mb-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Instructions</h3>
            <ol className="list-decimal pl-5 space-y-4 text-dark font-medium">
                {game.setupInstructions?.map((inst, idx) => (
                    <li key={idx} className="pl-2">{inst}</li>
                ))}
                {!game.setupInstructions && <li>Clear a safe play area.</li>}
            </ol>
        </div>

        <Button variant="primary" size="lg" className="w-full" onClick={handleNext} rightIcon={<ArrowRight className="w-5 h-5" />}>
            Setup Complete
        </Button>
     </div>
  );

  // --- STEP 3: EXECUTION ---
  const ExecutionView = () => (
     <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4">
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-dark mb-2">Step 3: Execution & Observation</h2>
            <p className="text-gray-600">Please review the test protocols below before starting.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 1. What is this test about? */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="flex items-center gap-2 font-bold text-dark mb-3">
                    <BookOpen className="w-5 h-5 text-primary" /> 1. About this Test
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {game.description}
                </p>
            </div>

            {/* 2. What it measures */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="flex items-center gap-2 font-bold text-dark mb-3">
                    <Target className="w-5 h-5 text-accent" /> 2. What it Measures
                </h3>
                <div className="flex flex-wrap gap-2">
                    {game.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="space-y-6 mb-8">
             {/* 3. How to Administer */}
             <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <h3 className="flex items-center gap-2 text-blue-800 font-bold mb-3">
                    <Settings className="w-5 h-5" /> 3. How to Administer
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                    {game.executionDescription || "Facilitate the activity as described in the instructions."}
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* 4. Child Instructions */}
                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="flex items-center gap-2 font-bold text-dark mb-4">
                        <User className="w-5 h-5 text-gray-400" /> 4. What Child Should Do
                    </h3>
                    <ol className="list-decimal pl-5 space-y-3 text-sm text-dark font-medium">
                        {game.executionInstructions?.map((inst, idx) => (
                            <li key={idx} className="pl-1">{inst}</li>
                        ))}
                        {!game.executionInstructions && <li>"Play the game!"</li>}
                    </ol>
                 </div>

                 {/* 5. Observation Focus */}
                 <div className="bg-orange-50 rounded-2xl border border-orange-100 p-6">
                    <h3 className="flex items-center gap-2 text-orange-800 font-bold mb-3">
                        <Eye className="w-5 h-5" /> 5. Observation Focus
                    </h3>
                    <div className="text-orange-900 text-sm leading-relaxed">
                        <p className="font-bold mb-2">As they perform the task, watch for:</p>
                        <p>{game.observationFocus || "General engagement and motor skills."}</p>
                        <div className="mt-4 pt-4 border-t border-orange-200 text-xs text-orange-700 italic">
                            * You will record these observations in the next step.
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        <Button variant="primary" size="lg" className="w-full" onClick={handleNext} rightIcon={<Check className="w-5 h-5" />}>
            I Understand - Start Task
        </Button>
     </div>
  );

  // --- STEP 4: REPORTING ---
  const ReportingView = () => (
     <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4">
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-dark mb-2">Step 4: Report Findings</h2>
            <p className="text-gray-600">Answer these questions based on what you just saw.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-8 mb-8">
            {game.observationQuestions?.map((q) => (
                <div key={q.id} className="space-y-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <p className="text-lg font-bold text-dark">{q.text}</p>
                    
                    {q.type === 'boolean' && (
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => handleInputChange(q.id, true)}
                                className={`py-4 rounded-xl font-bold border-2 transition-all ${
                                    formData[q.id] === true 
                                    ? 'border-primary bg-primary/10 text-primary' 
                                    : 'border-gray-200 text-gray-500 hover:border-primary/50'
                                }`}
                            >
                                Yes
                            </button>
                            <button 
                                onClick={() => handleInputChange(q.id, false)}
                                className={`py-4 rounded-xl font-bold border-2 transition-all ${
                                    formData[q.id] === false 
                                    ? 'border-red-500 bg-red-50 text-red-600' 
                                    : 'border-gray-200 text-gray-500 hover:border-red-300'
                                }`}
                            >
                                No
                            </button>
                        </div>
                    )}

                    {q.type === 'scale' && (
                        <div>
                             <div className="flex justify-between text-xs text-gray-400 font-bold uppercase mb-2">
                                <span>Low / Not at all</span>
                                <span>High / Very much</span>
                             </div>
                             <div className="flex justify-between gap-2">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => handleInputChange(q.id, num)}
                                        className={`w-full h-12 rounded-xl font-bold border-2 transition-all ${
                                            formData[q.id] === num
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-200 text-gray-500 hover:border-primary/50'
                                        }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                             </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

        <Button 
            variant="primary" 
            size="lg" 
            className="w-full" 
            onClick={handleSubmit} 
            isLoading={isSubmitting}
            disabled={Object.keys(formData).length < (game.observationQuestions?.length || 0)}
        >
            Submit Data
        </Button>
     </div>
  );

  // --- STEP 5: COMPLETION ---
  const CompletionView = () => (
      <div className="text-center max-w-md mx-auto py-12 animate-in zoom-in duration-300">
         <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <ClipboardCheck className="w-12 h-12" />
         </div>
         <h1 className="text-3xl font-heading font-bold text-dark mb-4">Data Saved!</h1>
         <p className="text-gray-600 mb-8">
             Great job observing! Your insights have been added to the profile.
             You earned <span className="font-bold text-accent">50 Sparks</span> for this session.
         </p>
         <Link to="/dashboard">
             <Button variant="primary" size="lg" className="w-full">Back to Dashboard</Button>
         </Link>
      </div>
  );

  // --- MAIN RENDER ---
  return (
    <div className="min-h-screen bg-cream">
       {/* Simple Header */}
       <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-50">
           {step < 5 && (
               <button onClick={() => navigate('/dashboard/library')} className="text-gray-400 hover:text-dark mr-4">
                   <CloseIcon className="w-6 h-6" />
               </button>
           )}
           <span className="font-heading font-bold text-dark text-lg">{game.title}</span>
           
           {/* Progress Indicator */}
           {step < 5 && (
               <div className="ml-auto flex gap-2">
                   {[1, 2, 3, 4].map(s => (
                       <div 
                        key={s} 
                        className={`h-2 w-8 rounded-full transition-colors ${
                            s <= step ? 'bg-primary' : 'bg-gray-200'
                        }`}
                       />
                   ))}
               </div>
           )}
       </div>

       <div className="container mx-auto px-4 py-8">
           {step === 1 && <MaterialsView />}
           {step === 2 && <SetupView />}
           {step === 3 && <ExecutionView />}
           {step === 4 && <ReportingView />}
           {step === 5 && <CompletionView />}
       </div>
    </div>
  );
};

export default AssessmentFlow;
