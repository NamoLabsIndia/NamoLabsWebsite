import React from "react";
import Link from "next/link";

// Body for /insights/nist-pqc-standards-ml-kem-ml-dsa-explained.
// Header (H1, byline, dates) is rendered by the article route template; this
// component owns the H2 sections downward. Pure server component — no client JS,
// fully server-rendered for search and AI crawlers.
export default function NistPqcStandards() {
  return (
    <article className="max-w-none">
      <h2 className="text-2xl font-bold text-namo-black mt-0 mb-4">
        What NIST Standardized — and Why
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        NIST&apos;s post-quantum cryptography standards are a set of encryption
        algorithms designed to resist attacks from both classical and quantum
        computers. On August 13, 2024, the U.S. National Institute of Standards
        and Technology finalized the first three as Federal Information
        Processing Standards: <strong>ML-KEM</strong> (FIPS 203) for key
        establishment, <strong>ML-DSA</strong> (FIPS 204) for digital
        signatures, and <strong>SLH-DSA</strong> (FIPS 205) as a hash-based
        signature alternative.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason is Shor&apos;s algorithm: a sufficiently large quantum
        computer running it would break RSA and elliptic-curve cryptography — the
        public-key algorithms that secure essentially all of today&apos;s
        internet traffic, digital signatures, and stored secrets. NIST ran an
        eight-year open competition (2016&ndash;2024), evaluating dozens of
        candidate algorithms under public cryptanalysis. The two lattice-based
        winners most organizations will deploy first are ML-KEM and ML-DSA, and
        they solve two different problems.
      </p>

      <h2 className="text-2xl font-bold text-namo-black mt-10 mb-4">
        ML-KEM: Key Encapsulation Explained
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ML-KEM — the Module-Lattice-based Key-Encapsulation Mechanism,
        standardized in FIPS 203 and derived from the CRYSTALS-Kyber submission —
        does one job: it lets two parties establish a shared secret key over an
        insecure channel. That is the post-quantum replacement for the
        key-exchange role RSA and Elliptic-Curve Diffie-Hellman play inside TLS,
        VPNs, and secure messaging today.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Its security rests on the <strong>Module Learning With Errors</strong>{" "}
        (Module-LWE) problem — the difficulty of recovering a secret from noisy
        linear equations over structured lattices. No known algorithm, classical
        or quantum, solves it efficiently. ML-KEM ships in three parameter sets,
        which trade key size and compute cost against security margin:
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200 text-left">
              <th className="py-2 pr-4 font-semibold text-namo-black">Parameter set</th>
              <th className="py-2 pr-4 font-semibold text-namo-black">NIST security category</th>
              <th className="py-2 pr-4 font-semibold text-namo-black">Comparable to</th>
              <th className="py-2 font-semibold text-namo-black">Typical use</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 font-medium">ML-KEM-512</td>
              <td className="py-2 pr-4">Category 1</td>
              <td className="py-2 pr-4">AES-128</td>
              <td className="py-2">Constrained / performance-sensitive</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 font-medium">ML-KEM-768</td>
              <td className="py-2 pr-4">Category 3</td>
              <td className="py-2 pr-4">AES-192</td>
              <td className="py-2">General-purpose default</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 font-medium">ML-KEM-1024</td>
              <td className="py-2 pr-4">Category 5</td>
              <td className="py-2 pr-4">AES-256</td>
              <td className="py-2">High-assurance / long-lived secrets</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        ML-KEM-768 has emerged as the common default — it is the level behind the
        hybrid <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">X25519MLKEM768</code>{" "}
        key exchange already shipping in mainstream browsers and CDNs. Most teams
        deploy PQC key exchange in <em>hybrid</em> mode first, running a classical
        and a post-quantum algorithm together, so a weakness in either one alone
        does not compromise the connection.
      </p>

      <h2 className="text-2xl font-bold text-namo-black mt-10 mb-4">
        ML-DSA: Digital Signatures Explained
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ML-DSA — the Module-Lattice-based Digital Signature Algorithm, FIPS 204,
        derived from CRYSTALS-Dilithium — proves authenticity and integrity. It
        is the post-quantum replacement for the RSA and ECDSA signatures behind
        TLS certificates, code signing, firmware updates, and document signing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Its hardness comes from two lattice problems — Module-LWE and{" "}
        <strong>Module-SIS</strong> (Short Integer Solution) — combined through a
        construction called <em>Fiat-Shamir with Aborts</em>. In plain terms, the
        signer generates a candidate signature and rejects-and-retries until it
        produces one that leaks no information about the private key (rejection
        sampling). ML-DSA also comes in three parameter sets:
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200 text-left">
              <th className="py-2 pr-4 font-semibold text-namo-black">Parameter set</th>
              <th className="py-2 pr-4 font-semibold text-namo-black">NIST security category</th>
              <th className="py-2 font-semibold text-namo-black">Comparable strength</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 font-medium">ML-DSA-44</td>
              <td className="py-2 pr-4">Category 2</td>
              <td className="py-2">~AES-128 / SHA-256</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 font-medium">ML-DSA-65</td>
              <td className="py-2 pr-4">Category 3</td>
              <td className="py-2">~AES-192</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 font-medium">ML-DSA-87</td>
              <td className="py-2 pr-4">Category 5</td>
              <td className="py-2">~AES-256</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical catch: post-quantum signatures are much larger than ECDSA —
        kilobytes rather than tens of bytes. That size matters for
        bandwidth-constrained protocols like certificate chains and DNSSEC, and
        it is one reason NIST also standardized the more conservative hash-based
        SLH-DSA as a backup, and is still evaluating additional signature schemes.
      </p>

      <h2 className="text-2xl font-bold text-namo-black mt-10 mb-4">
        Why This Matters Now, Not Later
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The threat that makes this urgent is <strong>&ldquo;harvest now, decrypt
        later&rdquo;</strong>: an adversary can capture encrypted traffic today
        and store it until a cryptographically relevant quantum computer exists to
        decrypt it. Any data whose confidentiality must outlast the arrival of
        that machine — state secrets, health records, financial data, long-lived
        credentials — is effectively already exposed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Estimates for when such a computer arrives range from the early 2030s to
        much later, and the honest answer is that nobody knows precisely. But that
        uncertainty is not a reason to wait. A full cryptographic migration across
        a real organization — inventorying every place cryptography is used,
        building crypto-agility, testing, and deploying without breaking
        interoperability — takes years. The deadline that actually matters is not
        when quantum computers arrive; it is when you must <em>start</em>. That is
        exactly why regulators have set the deadlines below.
      </p>

      <h2 className="text-2xl font-bold text-namo-black mt-10 mb-4">
        Migration Timelines by Sector
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulatory picture is what turns an abstract quantum threat into a
        dated project plan. The headline deadlines already on the books:
      </p>
      <ul className="list-disc pl-5 text-gray-700 leading-relaxed mb-4 space-y-2">
        <li>
          <strong>United States:</strong> National Security Memorandum 10 (NSM-10)
          directs federal agencies toward migration by <strong>2035</strong>, with
          NSA&apos;s CNSA 2.0 suite setting earlier milestones for
          national-security systems through the late 2020s and early 2030s.
        </li>
        <li>
          <strong>European Union:</strong> the Coordinated Implementation Roadmap
          for the PQC transition (published 2025 by the NIS Cooperation Group)
          targets high-risk use cases by <strong>2030</strong> and medium-risk by
          2035. DORA has already put crypto-agility and operational resilience
          under regulatory scrutiny for financial entities since January 2025.
        </li>
        <li>
          <strong>United Kingdom:</strong> the NCSC published a three-phase
          timeline — discovery and planning by <strong>2028</strong>, migration of
          the highest-priority systems by 2031, and full migration by 2035.
        </li>
        <li>
          <strong>Australia:</strong> ASD guidance points toward phasing out
          today&apos;s public-key algorithms by <strong>2030</strong> for
          high-assurance systems.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These deadlines land hardest on public infrastructure with decades-long
        data-protection horizons, where the &ldquo;harvest now&rdquo; window is
        widest. That is the exact problem we work on in{" "}
        <Link href="/solutions/governments" className="text-accent font-medium hover:underline">
          government PQC migration
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-namo-black mt-10 mb-4">
        What This Means for Your Organization
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wherever your deadline sits, the first moves are the same:
      </p>
      <ol className="list-decimal pl-5 text-gray-700 leading-relaxed mb-4 space-y-2">
        <li>
          <strong>Build a cryptographic inventory.</strong> You cannot migrate
          what you cannot see — and in most real estates, cryptography is used in
          far more places than anyone has documented.
        </li>
        <li>
          <strong>Prioritize by data lifetime and criticality.</strong> Systems
          protecting long-lived secrets migrate first; ephemeral session data can
          wait.
        </li>
        <li>
          <strong>Adopt crypto-agility.</strong> Architect so algorithms can be
          swapped without re-engineering the system around them.
        </li>
        <li>
          <strong>Start with hybrid deployments</strong> where standards and
          libraries already support them, rather than waiting for an all-at-once
          cutover.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The hard part was never the algorithm. It is finding every place
        cryptography touches a real system and sequencing the migration without
        breaking what already works. That is the work we do in{" "}
        <Link href="/consulting" className="text-accent font-medium hover:underline">
          PQC migration consulting
        </Link>
        . If you are a research institution or want to go deeper on the underlying
        cryptography, you can{" "}
        <Link href="/collaboration" className="text-accent font-medium hover:underline">
          propose a research collaboration
        </Link>{" "}
        or read{" "}
        <Link href="/research/cryptography" className="text-accent font-medium hover:underline">
          our post-quantum cryptography research
        </Link>
        .
      </p>

      <div className="mt-8 rounded-xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600 leading-relaxed">
        <strong className="text-namo-black">Sources:</strong> NIST FIPS 203
        (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA), published by the{" "}
        <a
          href="https://csrc.nist.gov/projects/post-quantum-cryptography"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          NIST Computer Security Resource Center
        </a>
        ; U.S. NSM-10; the UK NCSC PQC migration guidance; and the EU NIS
        Cooperation Group&apos;s PQC transition roadmap.
      </div>
    </article>
  );
}
