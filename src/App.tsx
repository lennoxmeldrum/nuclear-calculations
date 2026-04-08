import React, { useState } from 'react';
import { topics } from './data/topics';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { BookOpen, CheckCircle2, ChevronRight, XCircle } from 'lucide-react';

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState(topics[0].id);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const activeTopic = topics.find(t => t.id === activeTopicId) || topics[0];

  const handleAnswerSelect = (problemId: string, optionIndex: number) => {
    if (showExplanations[problemId]) return; // Prevent changing answer after checking
    setSelectedAnswers(prev => ({ ...prev, [problemId]: optionIndex }));
  };

  const handleCheckAnswer = (problemId: string) => {
    setShowExplanations(prev => ({ ...prev, [problemId]: true }));
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full shadow-sm z-10">
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Nuclear Physics
          </h1>
          <p className="text-sm text-slate-500 mt-1">Interactive Study Guide</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {topics.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopicId(topic.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                activeTopicId === topic.id
                  ? 'bg-indigo-50 text-indigo-700 font-medium shadow-sm ring-1 ring-indigo-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                  activeTopicId === topic.id ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  {index + 1}
                </span>
                <span className="truncate max-w-[180px]">{topic.title}</span>
              </span>
              <ChevronRight className={`w-4 h-4 ${activeTopicId === topic.id ? 'text-indigo-400' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-4xl mx-auto p-8 lg:p-12">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
              Topic {activeTopic.id} of {topics.length}
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{activeTopic.title}</h2>
          </div>

          <div className="space-y-8">
            {/* Theory Section */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                Theory
              </h3>
              <div className="text-slate-700 leading-relaxed">
                <MarkdownRenderer content={activeTopic.theory} />
              </div>
            </section>

            {/* Example Section */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Example Problem</h3>
              <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-slate-100">
                <h4 className="font-semibold text-slate-700 mb-2">Question:</h4>
                <div className="text-slate-700">
                  <MarkdownRenderer content={activeTopic.example.question} />
                </div>
              </div>
              <div className="bg-indigo-50/50 rounded-xl p-6 border border-indigo-100/50">
                <h4 className="font-semibold text-indigo-900 mb-2">Solution:</h4>
                <div className="text-slate-700">
                  <MarkdownRenderer content={activeTopic.example.solution} />
                </div>
              </div>
            </section>

            {/* Practice Section */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Practice Problem</h3>
              
              {activeTopic.practiceProblems.map((problem) => {
                const selectedAnswer = selectedAnswers[problem.id];
                const showExplanation = showExplanations[problem.id];
                const isCorrect = selectedAnswer === problem.correctAnswerIndex;

                return (
                  <div key={problem.id} className="space-y-6">
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                      <div className="text-slate-800 font-medium text-lg">
                        <MarkdownRenderer content={problem.question} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {problem.options.map((option, index) => {
                        const isSelected = selectedAnswer === index;
                        const isCorrectOption = index === problem.correctAnswerIndex;
                        
                        let buttonClass = "p-4 rounded-xl border-2 text-left transition-all duration-200 ";
                        
                        if (showExplanation) {
                          if (isCorrectOption) {
                            buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-900";
                          } else if (isSelected) {
                            buttonClass += "bg-rose-50 border-rose-500 text-rose-900";
                          } else {
                            buttonClass += "bg-white border-slate-200 text-slate-500 opacity-50";
                          }
                        } else {
                          if (isSelected) {
                            buttonClass += "bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm";
                          } else {
                            buttonClass += "bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-slate-50";
                          }
                        }

                        return (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(problem.id, index)}
                            disabled={showExplanation}
                            className={buttonClass}
                          >
                            <div className="flex items-center justify-between">
                              <MarkdownRenderer content={option} />
                              {showExplanation && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-2" />}
                              {showExplanation && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 ml-2" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {!showExplanation && selectedAnswer !== undefined && (
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => handleCheckAnswer(problem.id)}
                          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-sm transition-colors"
                        >
                          Check Answer
                        </button>
                      </div>
                    )}

                    {showExplanation && (
                      <div className={`mt-6 p-6 rounded-xl border ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
                        <h4 className={`font-bold mb-2 flex items-center gap-2 ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                          {isCorrect ? (
                            <><CheckCircle2 className="w-5 h-5" /> Correct!</>
                          ) : (
                            <><XCircle className="w-5 h-5" /> Incorrect</>
                          )}
                        </h4>
                        <div className="text-slate-700 mt-4 pt-4 border-t border-slate-200/60">
                          <h5 className="font-semibold text-slate-900 mb-2">Explanation:</h5>
                          <MarkdownRenderer content={problem.explanation} />
                        </div>
                        
                        {/* Next Topic Button */}
                        {activeTopic.id < topics.length && (
                          <div className="mt-6 flex justify-end">
                            <button
                              onClick={() => {
                                setActiveTopicId(activeTopic.id + 1);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-sm transition-colors flex items-center gap-2"
                            >
                              Next Topic <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
