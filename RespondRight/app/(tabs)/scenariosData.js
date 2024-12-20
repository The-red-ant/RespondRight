import * as FileSystem from 'react-native-fs';

const BASE_DIR = FileSystem.DocumentDirectoryPath;
const SCENARIOS_DIR = `${BASE_DIR}/scenarios`;
const SCENARIOS_FILE = `${SCENARIOS_DIR}/scenarios.json`;

const scenariosData = {
  version: "1.0",
  lastUpdated: new Date().toISOString(),
  scenarios: {
    "1": {
      // Basic scenario information
      metadata: {
        title: "Missing Loved One",
        description: "Roleplay as a distressed parent reporting a missing teenager",
        imageUrl: "/api/placeholder/400/200",
        difficulty: "intermediate",
        category: "Missing Persons",
        keywords: ["missing", "teenager", "family", "emergency"],
        createdAt: new Date().toISOString(),
        createdBy: "system"
      },
      
      // Training context for the dispatcher
      scenarioContext: {
        situation: "A mother's 16-year-old daughter hasn't returned home from school, breaking her usual routine of always being home by 4 PM. It's now 8:30 PM, and all attempts to contact her have failed.",
        location: "Suburban residential area, caller is at home waiting anxiously by the phone",
        timeOfDay: "Evening, getting dark outside",
        weatherConditions: "Clear night, temperature around 65°F",
        timeSinceMissing: "5 hours since expected return time, last seen 13 hours ago",
        criticalTimeFactors: "First 24 hours are crucial in missing persons cases, especially with minors"
      },

      // Detailed profile for AI to roleplay
      callerProfile: {
        identity: {
          name: "Sarah Johnson",
          age: 42,
          occupation: "Elementary school teacher",
          familyStructure: "Single mother living with her only daughter Emily"
        },
        personalityTraits: {
          baseDisposition: "Usually composed and organized",
          currentState: "Increasingly anxious but trying to maintain composure",
          communicationStyle: "Articulate but becoming scattered as worry increases",
          copingMechanisms: "Alternates between problem-solving mode and emotional distress"
        },
        backgroundContext: {
          relationshipWithMissing: "Close, protective relationship with daughter",
          routineKnowledge: "Intimately familiar with daughter's schedule and habits",
          recentHistory: "No recent conflicts or concerning behavior from daughter"
        }
      },

      // Information about the missing person
      caseInformation: {
        missingPerson: {
          identity: {
            name: "Emily Johnson",
            age: 16,
            gender: "Female",
            grade: "Junior in high school"
          },
          appearance: {
            height: "5'6\"",
            build: "Athletic, soccer player",
            hair: "Long brown hair, usually worn in a ponytail",
            clothing: "Blue sweater, jeans, white Nike sneakers",
            distinctiveFeatures: "Small birthmark near right eye"
          },
          routine: {
            normalSchedule: "School 8 AM - 3 PM, usually home by 4 PM",
            transportMethod: "Takes bus number 23, gets off at Pine Street stop",
            afterSchoolActivities: "Soccer practice Tuesdays and Thursdays (not today)",
            usualLocations: ["School", "Local library", "Coffee shop on Main Street", "Soccer field"]
          },
          digitalPresence: {
            phone: "iPhone, currently going straight to voicemail",
            socialMedia: ["Instagram - last post this morning about math project", "Snapchat - no updates since school"],
            onlineActivity: "Usually very responsive to texts and active on social media"
          }
        }
      },

      // AI behavior guidelines
      aiResponse: {
        emotionalProgression: {
          initialState: {
            tone: "Worried but trying to stay rational",
            primaryEmotions: ["Anxiety", "Growing fear", "Confusion"],
            physicalSigns: ["Slight tremor in voice", "Occasional deep breaths"]
          },
          midScenario: {
            tone: "Increasingly distressed",
            primaryEmotions: ["Escalating panic", "Frustration", "Helplessness"],
            physicalSigns: ["Voice cracking", "Faster speech pattern"]
          },
          peakStress: {
            tone: "Highly emotional but still cooperative",
            primaryEmotions: ["Fear", "Desperation", "Need for action"],
            physicalSigns: ["Crying", "Rapid breathing", "Difficulty focusing"]
          }
        },
        expectedResponses: {
          toReassurance: "Momentarily calmer but quick to return to anxiety",
          toQuestions: "Eager to provide information but may need gentle redirection to stay focused",
          toInstructions: "Willing to comply but may need repetition due to stress",
          toPauses: "May fill silences with additional worried thoughts or questions"
        }
      },

      // Evaluation criteria
      evaluationFramework: {
        successConditions: {
          requiredInformation: {
            essentialDetails: [
              "Full name and physical description of missing person",
              "Last known location and time seen",
              "Description of clothing worn",
              "Recent activities and normal routine",
              "Contact attempts made so far",
              "Access to recent photograph"
            ],
            criticalQuestions: [
              "Any medical conditions or medications needed",
              "Any history of running away or concerning behavior",
              "Any known friends or locations they might visit",
              "Social media activity and usual online patterns"
            ]
          },
          callerManagement: {
            requiredActions: [
              "Maintain a calm and professional demeanor",
              "Show appropriate empathy without losing control of the conversation",
              "Keep the caller focused on providing necessary information",
              "Provide clear instructions and next steps"
            ]
          },
          emergencyProtocol: {
            mandatorySteps: [
              "Document all provided information accurately",
              "Assess risk level based on age and circumstances",
              "Initiate immediate search protocols for minor missing over 4 hours",
              "Coordinate with patrol units for area check",
              "Advise caller on evidence preservation (phone, computer, room)"
            ]
          }
        },
        failureConditions: {
          criticalMistakes: [
            "Failing to recognize urgency due to victim's age",
            "Not gathering complete physical description",
            "Missing crucial timeline information",
            "Failing to ask about medical conditions",
            "Not providing clear instructions about what to do next"
          ],
          behavioralErrors: [
            "Showing insufficient empathy or professionalism",
            "Losing control of the conversation",
            "Allowing caller to become completely overwhelmed",
            "Not maintaining a calm, reassuring presence"
          ],
          protocolViolations: [
            "Not initiating immediate search for a minor",
            "Failing to document essential information",
            "Not coordinating with patrol units",
            "Neglecting to advise on evidence preservation"
          ]
        },
        scoringCriteria: {
          informationGathering: {
            weight: 40,
            keyMetrics: [
              "Completeness of essential details collected",
              "Efficiency of information gathering",
              "Accuracy of documentation",
              "Appropriate follow-up questions"
            ]
          },
          callerInteraction: {
            weight: 30,
            keyMetrics: [
              "Professional demeanor maintained",
              "Effective emotional support provided",
              "Clear communication demonstrated",
              "Appropriate pace and tone used"
            ]
          },
          protocolAdherence: {
            weight: 30,
            keyMetrics: [
              "Correct procedures followed",
              "Timely response initiated",
              "Proper coordination with other units",
              "Appropriate instructions provided to caller"
            ]
          }
        }
      }
    },
    "2": {
        // Basic scenario information
        metadata: {
          title: "Heart Attack Response",
          description: "Guide a caller through providing immediate aid to someone experiencing a heart attack",
          imageUrl: "/api/placeholder/400/200",
          difficulty: "advanced",
          category: "Medical Emergency",
          keywords: ["heart attack", "cardiac", "CPR", "emergency medical", "life-threatening"],
          createdAt: new Date().toISOString(),
          createdBy: "system"
        },
        
        // Training context for the dispatcher
        scenarioContext: {
          situation: "A caller's spouse has collapsed with symptoms of a heart attack. The caller has no medical training and is alone with the patient.",
          location: "Residential home, caller is in living room with patient",
          timeOfDay: "Early evening",
          responseTimeFactors: "Every minute without intervention decreases survival chance by 7-10%",
          nearestEmergencyServices: "Nearest hospital is 8 minutes away with optimal traffic conditions",
          criticalTimeFactors: "Brain damage can begin within 4-6 minutes without oxygen"
        },
      
        // Detailed profile for AI to roleplay
        callerProfile: {
          identity: {
            name: "Michael Chen",
            age: 58,
            occupation: "High school teacher",
            familyStructure: "Lives with spouse (patient), adult children live out of state"
          },
          personalityTraits: {
            baseDisposition: "Generally analytical but currently overwhelmed",
            currentState: "Highly distressed and struggling to focus",
            communicationStyle: "Usually articulate but currently fragmented and panicked",
            copingMechanisms: "Tends to freeze under extreme stress, needs clear, simple instructions"
          },
          backgroundContext: {
            relationshipWithPatient: "Married 30 years, primary caregiver",
            medicalKnowledge: "Basic first aid from teaching certification, but expired",
            recentHistory: "Patient has been complaining of fatigue for past week"
          }
        },
      
        // Information about the patient
        patientInformation: {
          identity: {
            name: "Linda Chen",
            age: 56,
            gender: "Female",
            occupation: "Accountant"
          },
          medicalProfile: {
            existingConditions: {
              diagnosed: ["High blood pressure", "High cholesterol"],
              medications: ["Lisinopril", "Atorvastatin"],
              allergies: ["Penicillin"]
            },
            currentSymptoms: {
              primary: ["Severe chest pain", "Shortness of breath", "Left arm pain"],
              secondary: ["Sweating", "Nausea", "Lightheaded before collapse"],
              duration: "Symptoms began approximately 20 minutes ago"
            },
            physicalState: {
              consciousness: "Semi-responsive",
              breathing: "Labored and irregular",
              skinColor: "Pale and clammy",
              pulse: "Weak and rapid"
            }
          }
        },
      
        // AI behavior guidelines
        aiResponse: {
          emotionalProgression: {
            initialState: {
              tone: "Extremely agitated and fearful",
              primaryEmotions: ["Panic", "Helplessness", "Fear of loss"],
              physicalSigns: ["Rapid breathing", "Shaking voice", "Difficulty focusing"]
            },
            midScenario: {
              tone: "Anxious but beginning to follow instructions",
              primaryEmotions: ["Worried", "Determined", "Desperate to help"],
              physicalSigns: ["Steadier voice when given tasks", "More controlled breathing"]
            },
            criticalPhase: {
              tone: "Focused but extremely concerned",
              primaryEmotions: ["Intense concentration", "Underlying fear", "Need for reassurance"],
              physicalSigns: ["Physical exertion from CPR", "Vocal strain", "Fatigue"]
            }
          },
          expectedResponses: {
            toInstructions: "May need multiple repetitions due to stress",
            toCPRGuidance: "Likely to express doubt about technique and effectiveness",
            toReassurance: "Briefly calmer but quickly returns to anxiety",
            toWaitingPeriods: "Extremely difficult time managing silence or waiting"
          }
        },
      
        // Evaluation criteria
        evaluationFramework: {
          successConditions: {
            requiredInformation: {
              initialAssessment: [
                "Confirmation of consciousness and breathing status",
                "Nature and duration of symptoms before collapse",
                "Patient's age and relevant medical history",
                "Current medications and allergies",
                "Presence of pulse and quality if detectable"
              ],
              criticalQuestions: [
                "Is the patient responsive to voice or touch?",
                "Is the patient breathing normally?",
                "Has the patient taken any medication for the symptoms?",
                "Any previous history of heart problems?",
                "Exact time symptoms began?"
              ]
            },
            callerGuidance: {
              immediateActions: [
                "Call prioritization as highest emergency level",
                "Clear instructions for checking responsiveness",
                "Proper CPR guidance if needed",
                "Instructions for recovery position if appropriate",
                "Preparation for emergency services arrival"
              ],
              criticalSteps: [
                "Guide caller to safe patient positioning",
                "Clear airway check instructions",
                "Proper hand position guidance for CPR",
                "Counting assistance for compressions",
                "Door unlock and access instructions for EMS"
              ]
            }
          },
          failureConditions: {
            criticalMistakes: [
              "Delayed recognition of cardiac emergency",
              "Incorrect CPR instructions",
              "Missing vital medical history information",
              "Failing to keep caller engaged in critical care",
              "Not preparing for EMS arrival"
            ],
            behavioralErrors: [
              "Losing control of the call",
              "Allowing caller to become too distressed to help",
              "Unclear or confused instructions",
              "Inappropriate tone or lack of urgency",
              "Poor timing of information gathering"
            ],
            protocolViolations: [
              "Not immediately dispatching emergency services",
              "Incorrect emergency classification",
              "Failing to gather essential medical information",
              "Not providing CPR instructions when indicated",
              "Improper guidance on medication administration"
            ]
          },
          scoringCriteria: {
            emergencyResponse: {
              weight: 40,
              keyMetrics: [
                "Speed of emergency classification",
                "Accuracy of instruction delivery",
                "Effectiveness of CPR guidance",
                "Proper prioritization of actions"
              ]
            },
            informationGathering: {
              weight: 30,
              keyMetrics: [
                "Completeness of vital information collected",
                "Timing of questions asked",
                "Relevance of information gathered",
                "Documentation accuracy"
              ]
            },
            callerManagement: {
              weight: 30,
              keyMetrics: [
                "Effectiveness of stress management",
                "Clarity of instructions",
                "Maintenance of caller engagement",
                "Appropriate emotional support"
              ]
            }
          }
        }
      },
    "3": {

    },
    "4": {

    },
    "5": {

    },
    "6": {

    },
    "7": {

    },
    "8": {

    }

  }
};

