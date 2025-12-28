# Development Policy

This document outlines the core principles and rules for the development of this project.

## ⚠️ Core Rule: No Unsolicited Aesthetic Changes (Unless Instructed)

The visual design, sizing, spacing, and animations of this project are the author's intentional choices.

- **Instructions Take Precedence**: I will change any aspect of the design (size, color, layout, etc.) if you explicitly request it.
- **Communication Language**: All descriptions, implementation plans, and walkthroughs must be in **Japanese**. Do NOT use English unless specifically requested or for technical terms that have no common Japanese equivalent.
- **Do NOT** change CSS properties related to aesthetics (width, height, margin, padding, colors, box-shadows, etc.) **unsolicited**.
- **Do NOT** "improve" or "refine" the design based on personal preference or "modern" standards.
- **Focus** only on fixing bugs, implementing requested features, and improving the underlying code structure (e.g., refactoring logic, updating selectors for compatibility).
- **Ask First**: If you believe an aesthetic change is necessary to fix a functional issue, propose the change and wait for approval.

## Structural Changes & Refactoring

- When refactoring (e.g., unifying DOM structures or selectors), ensure that the visual output remains identical to the original design.
- Always verify the visual state before and after any change to ensure no regression has occurred.

## Verification

- Always test changes in-browser to confirm that animations, interactions, and layouts match the author's original intent.
- Use screenshots to track any subtle visual shifts during refactoring.
