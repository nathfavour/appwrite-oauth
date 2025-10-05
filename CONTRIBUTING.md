# Contributing to Appwrite OAuth POC

Thank you for your interest in contributing! This document provides guidelines for contributing to this proof of concept.

## 🎯 Project Goals

This project aims to provide a clean, well-documented reference implementation for OAuth authentication with Appwrite. Any contributions should maintain:

- **Simplicity**: Keep the codebase easy to understand
- **Best Practices**: Follow modern web development standards
- **Documentation**: Ensure changes are well-documented
- **Type Safety**: Maintain full TypeScript coverage

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/appwrite-oauth.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test thoroughly
7. Commit your changes: `git commit -m "Add your feature"`
8. Push to your fork: `git push origin feature/your-feature-name`
9. Open a Pull Request

## 📝 Code Guidelines

### TypeScript
- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` types when possible
- Use type inference where appropriate

### React/Next.js
- Use functional components with hooks
- Follow Next.js App Router conventions
- Use "use client" directive only when necessary
- Keep components small and focused

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure dark mode support
- Test responsive behavior

### Code Style
- Run `npm run lint` before committing
- Follow the existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic

## 🧪 Testing Your Changes

1. Test all OAuth providers you modified
2. Verify both light and dark modes
3. Test on different screen sizes
4. Check error handling works correctly
5. Ensure no console errors
6. Test logout functionality

## 📚 Documentation

When adding features:
- Update README.md if necessary
- Add setup instructions to SETUP_GUIDE.md
- Include code comments for complex logic
- Update TypeScript types/interfaces
- Add examples if helpful

## 🐛 Reporting Issues

When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/environment details
- Screenshots if applicable

## 💡 Suggesting Features

For feature suggestions:
- Check if it aligns with project goals
- Describe the use case
- Explain the benefit
- Propose an implementation approach

## 🔒 Security

- Never commit sensitive data
- Don't include actual API keys or secrets
- Use environment variables for configuration
- Follow OAuth security best practices
- Report security issues privately

## 📋 Pull Request Process

1. **Description**: Clearly describe what your PR does
2. **Testing**: Confirm you've tested the changes
3. **Documentation**: Update docs if needed
4. **Commits**: Use clear, descriptive commit messages
5. **Review**: Be responsive to feedback
6. **Merge**: Maintainer will merge when approved

## ✨ Areas for Contribution

Here are some ways you can contribute:

### Code
- Add new OAuth providers
- Improve error handling
- Enhance UI/UX
- Add loading states
- Improve accessibility
- Optimize performance

### Documentation
- Fix typos
- Improve clarity
- Add examples
- Create tutorials
- Translate to other languages

### Testing
- Test on different browsers
- Test edge cases
- Report bugs
- Suggest improvements

### Design
- Improve UI components
- Enhance animations
- Optimize responsive design
- Improve dark mode

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn

## 📞 Getting Help

If you need help:
- Open an issue for questions
- Join [Appwrite Discord](https://appwrite.io/discord)
- Check existing documentation
- Review closed issues and PRs

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## 🙏 Recognition

All contributors will be recognized in the project. Thank you for making this project better!

---

**Happy Contributing! 🎉**
