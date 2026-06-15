# ⚕️ MediSA — Healthcare Should Begin With Understanding

> An AI-powered medical triage and healthcare guidance platform for Bangladesh

---

## What is MediSA?

MediSA is an AI-powered medical triage and healthcare guidance platform designed to help people in Bangladesh understand their symptoms **before** visiting a doctor.

Most patients in Bangladesh — especially in rural areas — arrive at hospitals confused about their symptoms, unsure which specialist to see, and with no structured medical history. MediSA solves this by guiding patients through an intelligent, conversational triage process that produces a structured report and a clear next step.

It is **not a diagnostic tool**. It is a decision-support system that makes patients more informed and healthcare systems more efficient.

---

## The Problem

Bangladesh's healthcare system faces systemic challenges that affect millions daily:

- Patients don't understand their symptoms and delay or misdirect care
- Wrong specialist selection wastes time and worsens outcomes
- Over 60% of the population is rural with limited access to qualified doctors
- Urban hospitals are overwhelmed by patients who could be triaged at home
- Doctors receive patients with no prior structured symptom data
- People rely on Google or social media for health answers — getting dangerous misinformation

---

## How It Works

```
Patient describes symptoms
        ↓
AI generates structured follow-up questions (LangGraph + Groq/Llama 3)
        ↓
FAISS vector search retrieves relevant medical knowledge (RAG)
        ↓
Multimodal AI analyzes uploaded images or documents (Gemini Vision)
        ↓
AI synthesizes everything into a risk-assessed triage report
        ↓
Patient receives a clear, plain-language report with next-step guidance
        ↓
Directed to the right specialist or emergency service
```

---

## Key Features

| Feature | Description |
|---|---|
| 💬 AI Symptom Assessment | Conversational intake collects a full symptom picture through intelligent follow-up questions |
| 📚 RAG Medical Retrieval | FAISS vector search grounds every response in validated medical knowledge |
| 🖼️ Symptom Image Analysis | Upload photos of rashes, wounds, or visible symptoms for multimodal analysis |
| 📑 Document Analysis | Upload prescriptions or lab reports — Gemini Vision extracts and interprets them |
| 📄 Patient-Friendly Reports | Clear, non-technical output with severity level, likely conditions, and urgency flags |
| 🩺 Doctor Recommendation | Smart routing to the right specialist based on triage outcome |

---

## Tech Stack

**Frontend**
- HTML5, CSS3, JavaScript
- Bootstrap

**Backend**
- PHP, MySQL

**AI Layer**
- FastAPI (Python)
- Groq + Llama 3-70b (conversational reasoning)
- Gemini Vision / Gemini Flash (image and document analysis)
- FAISS + Sentence Transformers (vector RAG)
- LangGraph (5-node workflow orchestration)

**Deployment**
- Vercel (frontend / documentation)
- Render (FastAPI backend)
- GitHub (version control)

---

## Architecture

```
┌─────────────────────────────────────┐
│           Frontend Layer            │
│     HTML · CSS · JS · Bootstrap     │
└──────────────┬──────────────────────┘
               │ REST API / HTTP
┌──────────────▼──────────────────────┐
│           Backend Layer             │
│           PHP · MySQL               │
└──────────────┬──────────────────────┘
               │ FastAPI Bridge
┌──────────────▼──────────────────────┐
│         AI Intelligence Layer       │
│  FastAPI · Groq/Llama3 · Gemini     │
│  FAISS RAG · LangGraph · OCR        │
└──────────────┬──────────────────────┘
               │ Cloud Deploy
┌──────────────▼──────────────────────┐
│         Deployment Layer            │
│       Vercel · Render · GitHub      │
└─────────────────────────────────────┘
```

---

## Responsible AI

MediSA is built with the following non-negotiable principles:

- **Not a doctor replacement** — every output directs users to consult a qualified physician
- **No diagnosis claims** — the system produces guidance, not verdicts
- **Safety-first escalation** — ambiguous or high-risk results automatically escalate to emergency care recommendations
- **Transparent reasoning** — reports disclose which models contributed and at what confidence
- **Human-in-the-loop roadmap** — future versions will include doctor review of AI outputs before delivery

---

## Roadmap

**2026**
- 🇧🇩 Full Bangla language support
- 🎙️ Voice interaction (Bengali & English)
- 📱 Android mobile app

**2027**
- 🕸️ GraphRAG for complex medical reasoning
- 🏥 Hospital EMR / HIS integration
- 👨‍⚕️ Human-in-the-loop doctor review pipeline

**2028**
- 🌏 Regional expansion across SAARC
- 🧬 Chronic disease management module
- 🔬 Lab result interpretation

---

## Team

**Team Moricha** —

| Name | Role |
|---|---|
| Ayesha Akter Rimi | Project Lead |

---

## Links

- 🌐 [Documentation Website](https://medi-sa-documentation-website.vercel.app/)
- ▶️ [Demo Video](#)
- 📺 [YouTube](#)

---

## Disclaimer

MediSA is a healthcare guidance tool, not a licensed medical service. It does not provide medical diagnoses. Always consult a qualified healthcare professional for medical decisions. In emergencies, contact your local emergency services immediately.

---

*Built with purpose for the people of Bangladesh · Team Moricha · BuildFest 2026*
