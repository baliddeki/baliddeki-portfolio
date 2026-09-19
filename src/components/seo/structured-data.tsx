import { articles } from "@/content/writing";
import { talks } from "@/content/talks";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

/**
 * Emits a JSON-LD graph describing the site.
 *
 * Search engines read this to understand that the site is one person, what
 * they build and where else they exist online — which is what produces a
 * knowledge-panel-style result rather than a bare blue link.
 *
 * The payload is assembled from the same content modules the pages render, so
 * it cannot drift out of sync with what a visitor actually sees.
 */
export function StructuredData() {
  const personId = `${siteConfig.url}/#person`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: profile.shortName,
        jobTitle: profile.role,
        description: profile.lead,
        email: `mailto:${profile.email}`,
        url: absoluteUrl("/"),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kampala",
          addressCountry: "UG",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Makerere University",
        },
        knowsAbout: [
          "Software engineering",
          "DevOps",
          "Docker",
          "CI/CD",
          "System integration",
          "Machine learning",
        ],
        sameAs: profile.socials.map((social) => social.href),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: absoluteUrl("/"),
        name: profile.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      ...projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.name,
        description: project.summary,
        creator: { "@id": personId },
        ...(project.link && { url: project.link.href }),
      })),
      ...talks.map((talk) => ({
        "@type": "Event",
        name: talk.title,
        description: talk.summary,
        startDate: talk.date,
        eventAttendanceMode:
          "https://schema.org/OnlineEventAttendanceMode",
        location: { "@type": "VirtualLocation", name: talk.event },
        performer: { "@id": personId },
        ...(talk.link && { url: talk.link.href }),
      })),
      ...articles.map((article) => ({
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        url: article.href,
        author: { "@id": personId },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      // The payload is built from local, trusted content modules — there is no
      // user input in this graph.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
