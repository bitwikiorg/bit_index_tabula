% =======================  main.tex  =========================
\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{geometry}
\usepackage{longtable,array}
\renewcommand{\arraystretch}{1.15}
\newcolumntype{P}[1]{>{\raggedright\arraybackslash}p{#1}}

\geometry{margin=1in}
\title{Agentic AI via Genotype--Phenotype Signaling}
\author{}
\date{\today}

\begin{document}
\maketitle

%---------------------------  ABSTRACT  ---------------------------
\section*{Abstract}
Agentic AI systems can emerge from deterministic mappings between model architectures (genotypes), runtime behaviors (phenotypes), and structured signaling substrates. We propose a four-layered signaling model using YAML, XML, JSON, and Markdown to encode identity, logic, state, and memory. Each format functions as a temporal–semantic layer, inspired by biological analogues. Recursive feedback loops across these formats allow adaptation without centralized control or heuristic opacity. This paper defines and justifies these mappings, clarifies the function of each format, and provides a composable system template.

%------------------  1. GENOTYPE–PHENOTYPE MAPPING  ------------------
\section{Genotype--Phenotype Mapping}
In AI, \textbf{genotype} refers to the model's architecture and configuration, whereas \textbf{phenotype} denotes its observable behavior at runtime. The relationship is mediated by dataflow, learning constraints, and environmental conditions.

\begin{longtable}{|P{3.3cm}|P{3.3cm}|P{2.3cm}|P{3.4cm}|P{3.4cm}|}
\hline
\textbf{Genotype class} & \textbf{Optimization target} & \textbf{Latency} & \textbf{Phenotype output} & \textbf{Agentic function} \\
\hline
Neural network        & Prediction accuracy   & ms--100\,ms & Pattern recognition      & Sequence modeling \\
Reinforcement learner & Cumulative reward     & 10\,ms--1\,s & Policy refinement        & Decision trajectories \\
Symbolic rule engine  & Logical entailment    & $<\!1$\,ms & Inference chains         & Constraint resolution \\
\hline
\end{longtable}

%-------------  2. SIGNAL MEDIA: STRUCTURE AND FUNCTION  -------------
\section{Signal Media: Structure and Function}
Each data format acts as a distinct signaling layer, encoding different semantic roles. These formats are human-readable, language-agnostic, and widely supported for structured data representation.

\begin{longtable}{|P{2.4cm}|P{3.2cm}|P{4.1cm}|P{4.6cm}|P{2.2cm}|}
\hline
\textbf{Format} & \textbf{Biological analogue} & \textbf{Function} & \textbf{Semantic layer} & \textbf{Update frequency} \\
\hline
YAML     & Hormone signal     & Global config; identity definitions   & Agent type, hyperparameters       & 0.1--10\,Hz \\
XML      & Gene regulation    & Structured reasoning rules            & Procedural logic, \texttt{<think>} tagging & 0.01--1\,Hz \\
JSON     & Neurotransmitter   & Module state and I/O                  & Real-time telemetry and exchange  & 10--1000\,Hz \\
Markdown & Stem-cell matrix   & Memory + freeform structure           & Contextual memory, latent plans   & 0.001--0.1\,Hz \\
\hline
\end{longtable}

\textbf{Note:} Each file format is semantically and temporally distinct. YAML governs long-term identity traits, XML encodes executable logic trees, JSON handles live inter-module signals, and Markdown stores reflective memory or prompts.

%------------------  3. RECURSIVE FEEDBACK LOOP  -------------------
\section{Recursive Feedback Loop Architecture}
Behavioral competence compounds through iteration. Each file type plays a unique role within the feedback loop:

\begin{longtable}{|P{2.2cm}|P{2.7cm}|P{4.2cm}|P{3.2cm}|P{2.1cm}|}
\hline
\textbf{Phase} & \textbf{File type} & \textbf{Role} & \textbf{Time resolution} & \textbf{Frequency} \\
\hline
Sense    & JSON      & Emit module state, environment signals & $<\!10$\,ms     & kHz \\
Evaluate & YAML      & Rebalance goals or hyperparameters     & $<\!100$\,ms    & Hz  \\
Adapt    & XML       & Adjust logic, reload modular pathways  & \textasciitilde1\,s      & sub-Hz \\
Store    & Markdown  & Append memory, trigger reflection      & $>\!1$\,min     & mHz  \\
\hline
\end{longtable}

Each loop iteration strengthens alignment between intent and behavior, forming a self-regulatory architecture.

%------------------  4. SYSTEM TEMPLATE ---------------------------
\section{System Template: Modular File Schema}
Below is a prototype agent structure using nested files to partition identity, logic, state, and memory.

\subsubsection*{\texttt{self.yml} (identity and role traits)}
\begin{verbatim}
name: agent_core
host: self
type: symbolic_neural_hybrid
mode: runtime_feedback
\end{verbatim}

\subsubsection*{\texttt{core.xml} (inference logic)}
\begin{verbatim}
<think>
  <intent>align</intent>
  <evaluate>runtime</evaluate>
</think>
\end{verbatim}

\subsubsection*{\texttt{system\_state.json} (current live status)}
\begin{verbatim}
{
  "modules": {
    "vision":   "stable",
    "dialogue": "active",
    "planner":  "idle"
  },
  "error_state": null,
  "cycle_time_ms": 17
}
\end{verbatim}

\subsubsection*{\texttt{episodic\_log.md} (episodic trace)}
\begin{verbatim}
## Session ID: 22AF-93
- Goal: summarize user intent
- Result: success
- Duration: 124ms
- Notes: no conflict detected
\end{verbatim}

%------------------  5. DESIGN IMPLICATIONS  ----------------------
\section{Design Implications}
\begin{itemize}
  \item \textbf{Modularity} — File boundaries allow specialization across agent functions.
  \item \textbf{Traceability} — Every decision maps to a file-level data structure.
  \item \textbf{Composability} — Behaviors can be composed by injecting or modifying file blocks.
  \item \textbf{Scalability} — Expanding capability adds depth without requiring retraining.
\end{itemize}

%------------------  6. CONCLUSION  -------------------------------
\section{Conclusion}
Agentic LLM systems can be scaffolded using discrete file-based semantics. YAML, XML, JSON, and Markdown serve as cognitive substrates spanning identity, logic, state, and memory. When embedded within recursive feedback loops, these structures enable transparent and extensible autonomy. This framework abstracts away from black-box heuristics toward modular symbolic-operational scaffolds.

%------------------  REFERENCES  ----------------------------------
\section*{References}
\begin{enumerate}
\item Silver \textit{et al.}, 2016. \textit{Mastering the Game of Go with Deep Neural Networks and Tree Search}. \textit{Nature}.
\item Lillicrap \textit{et al.}, 2015. \textit{Continuous Control with Deep Reinforcement Learning}. \textit{JMLR}.
\item Feng \textit{et al.}, 2019. \textit{Modular Instantiator Networks}. arXiv:1902.10742.
\item Park \textit{et al.}, 2024. \textit{Toward Modular, Self-Maintaining AI Systems}. arXiv:2402.06627.
\end{enumerate}

\end{document}
% =======================  end main.tex  =========================
