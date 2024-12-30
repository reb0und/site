import {
	FaGithub,
	FaLinkedin,
	FaMedium,
	FaFileAlt,
	FaEnvelope,
} from "react-icons/fa";

export default function Home() {
	return (
		<main className="bg-[#1a1a1a] text-white min-h-screen flex items-center justify-center font-sans">
			<div className="max-w-2xl text-left p-8">
				<h1 className="text-5xl font-bold mb-6">Dominic Magats</h1>

				<div className="space-y-2 mb-6">
					<div className="flex items-center space-x-2">
						<code className="bg-[#2a2a2a] px-3 py-1 rounded-md text-sm font-mono">
							dmagats [at] stevens [dot] edu
						</code>
						<span className="text-sm text-gray-400">or</span>
					</div>
					<code className="bg-[#2a2a2a] px-3 py-1 rounded-md text-sm font-mono">
						me [at] rebound [dot] sh
					</code>
				</div>

				<div className="space-y-1 mb-8 text-gray-300">
					<p>undergraduate student at</p>
					<p>stevens institute of technology</p>
					<p>bs computer science, mathematics</p>
					<p>quant analyst @ stevens student managed investment fund</p>
				</div>

				<div className="flex justify-center w-full space-x-6 text-2xl text-gray-400">
					<a
						href="https://github.com/reb0und"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/dominic-magats-6bb914230/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://medium.com/@reb0und"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors"
					>
						<FaMedium />
					</a>
					<a
						href="/Dominic_Magats_Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors"
					>
						<FaFileAlt />
					</a>
					<a
						href="mailto:me@rebound.sh"
						className="hover:text-white transition-colors"
					>
						<FaEnvelope />
					</a>
				</div>
			</div>
		</main>
	);
}
