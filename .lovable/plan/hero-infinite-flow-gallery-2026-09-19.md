# Hero infinite-flow gallery

## Goal
Replace the current floating collage and all hero copy/actions with a single centered headline over an endless right-to-left stream of CineQuick production photos.

## Changes
- Keep only “INDIA'S FASTEST CINEMATIC CONTENT CREATION TEAM” inside the hero.
- Preserve the existing minimal header logo and top-right WhatsApp button.
- Remove the hero subtitle, supporting copy, both buttons, scroll marker, and fixed/parallax collage behavior.
- Arrange all uploaded production photos into separate horizontal lanes with varied image sizes, vertical positions, speeds, and starting offsets.
- Duplicate each lane’s sequence so movement loops seamlessly without flicker or visible resets.
- Reserve fixed lane heights and consistent gaps so photos remain fully visible and never overlap.
- Add a restrained black overlay and subtle orange edge glow so the moving work remains dominant while the headline stays readable.
- Use slower CSS-only linear motion for smooth performance, with a static, well-spaced layout when reduced motion is enabled.

## Responsive behavior
- Use fewer visible lanes and smaller frames on phones while retaining all photos within the repeating flow.
- Keep the single headline centered, readable, and clear of the header at all supported sizes.

## Verification
- Confirm the project builds cleanly.
- Check desktop and mobile previews for continuous movement, safe image spacing, full image visibility, and absence of removed content.
