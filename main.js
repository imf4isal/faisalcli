#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

// Theme colors
const theme = {
    primary: '#10B981',
    secondary: '#6EE7B7',
    text: '#E2E8F0',
    dim: '#94A3B8'
};


const data = {
    name: chalk.hex(theme.secondary).bold('FAISAL'),
    email: chalk.hex(theme.text)('mdfaisal.dev@gmail.com'),
    phone: chalk.hex(theme.text)('+8801870620545'),
    designation: chalk.hex(theme.secondary)('Software Engineer'),
    social: {
        blog: {
            display: 'thefaisal.dev',
            url: 'https://thefaisal.dev'
        },
        github: {
            display: 'github',
            url: 'https://github.com/imf4isal'
        },
        linkedin: {
            display: 'linkedin',
            url: 'https://linkedin.com/in/imf4isal'
        }
    }
};

const ascii = `
    ███████╗ █████╗ ██╗███████╗ █████╗ ██╗     
    ██╔════╝██╔══██╗██║██╔════╝██╔══██╗██║     
    █████╗  ███████║██║███████╗███████║██║     
    ██╔══╝  ██╔══██║██║╚════██║██╔══██║██║     
    ██║     ██║  ██║██║███████║██║  ██║███████╗
    ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝`;

const output = `${chalk.hex(theme.primary)(ascii)}

    ${chalk.hex(theme.text).bold('$ whoami')}
    ${data.designation}

    ${chalk.hex(theme.text).bold('$ contact --info')}
    ${chalk.hex(theme.dim)('┌')} ${chalk.hex(theme.text).bold('Email')}    ${data.email}
    ${chalk.hex(theme.dim)('├')} ${chalk.hex(theme.text).bold('Mobile')}   ${data.phone}
    ${chalk.hex(theme.dim)('└')} ${chalk.hex(theme.text).bold('Blog')}     ${chalk.hex(theme.dim)(data.social.blog.display)}

    ${chalk.hex(theme.text).bold('$ social --links')}
    ${chalk.hex(theme.dim)('┌')} ${chalk.hex(theme.text).bold('GitHub')}   ${chalk.hex(theme.dim).underline(data.social.github.url)}
    ${chalk.hex(theme.dim)('└')} ${chalk.hex(theme.text).bold('LinkedIn')} ${chalk.hex(theme.dim).underline(data.social.linkedin.url)}

    ${chalk.hex(theme.dim)('// Thanks for checking out!')}
`;

// Print the output in a box
console.log(
    boxen(output, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: theme.primary,
        float: 'center'
    })
);