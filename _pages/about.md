---
layout: about
title: About
permalink: /
subtitle: >
  <span class="native-name" lang="zh-Hans">孟书民</span>
  <span class="identity-position">Master's Student in Computer Engineering</span>
  <span class="identity-affiliation">National University of Singapore</span>
  <span class="identity-focus">Embodied AI · VLA · Agentic Robotics</span>
profile: false
selected_papers: false
social: false
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<div class="identity-links" aria-label="Contact links">
  <a href="{{ site.data.profile.github }}">GitHub</a>
  <a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a>
</div>

<aside class="page-toc">
  <details open>
    <summary>On this page</summary>
    <nav aria-label="Table of contents">
      <ul>
        <li>
          <a href="#about">About</a>
          <ul><li><a href="#research-interests">Research interests</a></li></ul>
        </li>
        <li>
          <a href="#education">Education</a>
          <ul>
            <li><a href="#nus">NUS</a></li>
            <li><a href="#uestc">UESTC</a></li>
          </ul>
        </li>
        <li>
          <a href="#research">Research &amp; Experience</a>
          <ul>
            <li><a href="#internship">Embodied AI Internship</a></li>
            <li><a href="#agentic-robotics">Agentic Robotics</a></li>
            <li><a href="#vla-learning">VLA Learning</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </details>
</aside>

<section class="academic-section about-section" id="about" aria-labelledby="about-heading" tabindex="-1">
  <h2 id="about-heading">About</h2>
  <p>I'm Shumin Meng, a Master's student in Computer Engineering at the National University of Singapore (NUS).
  I received my bachelor's degree from the University of Electronic Science and Technology of China (UESTC) in June 2025.</p>
  <p>My interests lie in embodied artificial intelligence, vision-language-action models, and agentic robotic systems.</p>
  <p>I'm particularly interested in developing robotic systems capable of long-horizon task execution through perception,
  reasoning, planning, and closed-loop interaction.</p>
  <div class="research-interests" id="research-interests">
    <h3>Research interests</h3>
    <ul>
      {% for interest in site.data.profile.research_interests %}
        <li>{{ interest }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="academic-section" id="education" aria-labelledby="education-heading">
  <h2 id="education-heading">Education</h2>
  {% for education in site.data.education %}
    <article class="education-entry" id="{{ education.id }}">
      <div class="entry-heading">
        <h3>{{ education.institution }}</h3>
        <p class="entry-date">{{ education.dates }}</p>
      </div>
      <p class="entry-degree">{{ education.degree }}</p>
      <p class="entry-location">{{ education.location }}</p>
    </article>
  {% endfor %}
</section>

<section class="academic-section" id="research" aria-labelledby="research-heading">
  <h2 id="research-heading">Research &amp; Experience</h2>
  <article class="experience-entry" id="internship">
    <div class="entry-heading">
      <h3>Embodied AI Algorithm Intern</h3>
      <p class="entry-date">May 2026 – Aug. 2026</p>
    </div>
    <p>Research and engineering work included:</p>
    <ul class="detail-list">
      <li>Multimodal robotic data processing and standardization</li>
      <li>Vision-Language-Action model fine-tuning and evaluation</li>
      <li>Robotic manipulation in simulation and real-world environments</li>
      <li>Long-horizon robotic task planning and execution</li>
    </ul>
  </article>
  <div class="research-grid">
    {% for research in site.data.research %}
      <article class="research-entry" id="{{ research.id }}">
        <p class="entry-label">Research focus</p>
        <h3>{{ research.title }}</h3>
        {% if research.description %}<p>{{ research.description }}</p>{% endif %}
        <ul class="detail-list">
          {% for focus in research.focus %}
            <li>{{ focus }}</li>
          {% endfor %}
        </ul>
      </article>
    {% endfor %}
  </div>
</section>

<script src="{{ '/assets/js/academic-toc.js' | relative_url }}" defer></script>

<section class="academic-section contact-section" id="contact" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Contact</h2>
  <p>For academic correspondence:</p>
  <dl class="contact-details">
    <div>
      <dt>Email</dt>
      <dd><a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a></dd>
    </div>
    <div>
      <dt>GitHub</dt>
      <dd><a href="{{ site.data.profile.github }}">github.com/MILLOPE</a></dd>
    </div>
    <div>
      <dt>Website</dt>
      <dd><a href="{{ site.data.profile.website }}">{{ site.data.profile.website }}</a></dd>
    </div>
  </dl>
</section>
