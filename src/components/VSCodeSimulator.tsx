import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToggleSwitch } from "./ToggleSwitch";
import { 
  Code, 
  FileText, 
  MessageSquare, 
  Search, 
  Bot,
  Folder,
  File,
  Play,
  Settings,
  GitBranch
} from "lucide-react";

interface CodeFile {
  name: string;
  content: string;
  suggestedDoc: string;
}

export const VSCodeSimulator = () => {
  const [isToggleDocsOn, setIsToggleDocsOn] = useState(false);
  const [activeTab, setActiveTab] = useState<'tldr' | 'ask' | 'suggest'>('tldr');
  const [selectedFile, setSelectedFile] = useState<CodeFile>({
    name: "UserService.java",
    content: `public class UserService {
    public String getUser(String id) {
        return "User: " + id;
    }
    
    public void addUser(String name, String email) {
        // Implementation here
    }
}`,
    suggestedDoc: `/**
 * UserService handles retrieval and management of user data.
 * 
 * This service provides basic CRUD operations for user entities
 * and includes validation for user inputs.
 */
public class UserService {
    
    /**
     * Retrieves user information by ID.
     * @param id The unique identifier for the user
     * @return A string containing the user information
     * @throws IllegalArgumentException if id is null or empty
     */
    public String getUser(String id) {
        return "User: " + id;
    }
    
    /**
     * Adds a new user to the system.
     * @param name The user's full name
     * @param email The user's email address
     * @throws IllegalArgumentException if name or email is invalid
     */
    public void addUser(String name, String email) {
        // Implementation here
    }
}`
  });

  const mockQA = [
    {
      question: "What does getUser method do?",
      answer: "The getUser method takes a user ID string as input and returns a formatted string containing user information. Currently returns a simple concatenation."
    },
    {
      question: "What validation is missing?",
      answer: "The method lacks null/empty ID validation and doesn't handle edge cases like invalid user IDs."
    },
    {
      question: "How can I improve this code?",
      answer: "Consider adding proper error handling, input validation, and returning a User object instead of a string."
    }
  ];

  const files = [
    { name: "UserService.java", icon: File, type: "java" },
    { name: "UserController.java", icon: File, type: "java" },
    { name: "README.md", icon: FileText, type: "markdown" },
    { name: "API.md", icon: FileText, type: "markdown" }
  ];

  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex flex-col">
      {/* VS Code Header */}
      <div className="h-12 bg-[#323233] flex items-center px-4 border-b border-[#454545]">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-300">ToggleDocs Demo - VS Code</span>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-4 bg-[#2d2d30] px-4 py-2 rounded-lg">
            <span className="text-sm font-medium">ToggleDocs Extension</span>
            <ToggleSwitch 
              isOn={isToggleDocsOn} 
              onToggle={setIsToggleDocsOn}
              className="scale-90"
            />
            <span className={`text-xs ${isToggleDocsOn ? 'text-green-400' : 'text-gray-500'}`}>
              {isToggleDocsOn ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <GitBranch className="h-4 w-4 text-gray-400" />
          <span className="text-xs text-gray-400">main</span>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 space-y-4">
          <Folder className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          <Search className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          <GitBranch className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          <Play className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          <Settings className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
        </div>

        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#454545]">
          <div className="p-4">
            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Explorer</div>
            <div className="space-y-1">
              {files.map((file, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 px-2 py-1 hover:bg-[#2a2d2e] rounded cursor-pointer"
                  onClick={() => file.type === 'java' && setSelectedFile({
                    ...selectedFile,
                    name: file.name,
                    content: selectedFile.content,
                    suggestedDoc: selectedFile.suggestedDoc
                  })}
                >
                  <file.icon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">{file.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col">
            {/* Tab Bar */}
            <div className="h-9 bg-[#2d2d30] border-b border-[#454545] flex items-center px-4">
              <div className="bg-[#1e1e1e] px-3 py-1 text-sm border-t-2 border-blue-500">
                {selectedFile.name}
              </div>
            </div>

            {/* Editor Content */}
            <div className="flex-1 p-4 bg-[#1e1e1e] font-mono text-sm">
              <div className="space-y-1">
                {selectedFile.content.split('\n').map((line, index) => (
                  <div key={index} className="flex">
                    <span className="w-8 text-gray-500 text-right mr-4">{index + 1}</span>
                    <span className="text-gray-300">{line}</span>
                  </div>
                ))}
              </div>

              {/* Change Detection Notification */}
              {isToggleDocsOn && (
                <div className="mt-4 p-3 bg-blue-900/30 border border-blue-500/50 rounded flex items-center space-x-3">
                  <Bot className="h-4 w-4 text-blue-400" />
                  <div>
                    <div className="text-sm font-medium text-blue-300">Documentation update suggested</div>
                    <div className="text-xs text-blue-400">Methods detected without proper Javadoc</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ToggleDocs Sidebar */}
          <div className={`transition-all duration-500 ${
            isToggleDocsOn ? 'w-96 opacity-100' : 'w-0 opacity-0 overflow-hidden'
          } bg-[#252526] border-l border-[#454545]`}>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">Docs Copilot</span>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-4 bg-[#2d2d30] rounded p-1">
                <button
                  onClick={() => setActiveTab('tldr')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    activeTab === 'tldr' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  TL;DR
                </button>
                <button
                  onClick={() => setActiveTab('ask')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    activeTab === 'ask' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Ask
                </button>
                <button
                  onClick={() => setActiveTab('suggest')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    activeTab === 'suggest' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Updates
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-4">
                {activeTab === 'tldr' && (
                  <Card className="p-4 bg-[#2d2d30] border-[#454545]">
                    <h3 className="text-sm font-medium mb-2 text-blue-300">File Summary</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      <strong>UserService.java:</strong> Simple service class with two methods. 
                      getUser() returns formatted user string, addUser() handles user creation. 
                      Missing proper documentation and error handling.
                    </p>
                  </Card>
                )}

                {activeTab === 'ask' && (
                  <div className="space-y-3">
                    {mockQA.map((qa, index) => (
                      <Card key={index} className="p-3 bg-[#2d2d30] border-[#454545]">
                        <div className="text-xs font-medium text-blue-300 mb-1">Q: {qa.question}</div>
                        <div className="text-xs text-gray-300">{qa.answer}</div>
                      </Card>
                    ))}
                  </div>
                )}

                {activeTab === 'suggest' && (
                  <div className="space-y-4">
                    <Card className="p-4 bg-[#2d2d30] border-[#454545]">
                      <h3 className="text-sm font-medium mb-3 text-yellow-300">Suggested Documentation</h3>
                      
                      <div className="space-y-3">
                        <Button 
                          size="sm" 
                          className="w-full justify-start bg-blue-600 hover:bg-blue-700"
                          onClick={() => {
                            setSelectedFile({
                              ...selectedFile,
                              content: selectedFile.suggestedDoc
                            });
                          }}
                        >
                          <FileText className="h-3 w-3 mr-2" />
                          Apply Javadoc Comments
                        </Button>
                        
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full justify-start border-gray-600 text-gray-300"
                        >
                          <Code className="h-3 w-3 mr-2" />
                          Update README.md
                        </Button>
                        
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full justify-start border-gray-600 text-gray-300"
                        >
                          <MessageSquare className="h-3 w-3 mr-2" />
                          Generate API Docs
                        </Button>
                      </div>
                    </Card>

                    <Card className="p-3 bg-amber-900/20 border-amber-500/30">
                      <div className="text-xs">
                        <div className="font-medium text-amber-300 mb-1">Changes Detected:</div>
                        <div className="text-amber-200">
                          • Missing method documentation<br/>
                          • No parameter validation<br/>
                          • Return type could be improved
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};