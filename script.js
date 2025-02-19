let licenseGenerated = false;

function generateLicense() {
    const name = document.getElementById("nameInput").value.trim();
    const year = document.getElementById("yearInput").value.trim();
    const licenseType = document.getElementById("licenseType").value;
    const outputArea = document.getElementById("outputArea");

    if (name === "" || year === "") {
        alert("Please enter your name and year!");
        return;
    }

    let licenseText = "";

    switch (licenseType) {
        case "MIT":
            licenseText = `MIT License\n\nCopyright (c) ${year} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
            break;

        case "GPL":
            licenseText = `GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007\n\nCopyright (c) ${year} ${name}

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.`;
            break;

        case "Apache":
            licenseText = `Apache License 2.0\n\nCopyright (c) ${year} ${name}

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
            break;

        case "BSD":
            licenseText = `BSD 3-Clause License\n\nCopyright (c) ${year} ${name}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.`;
            break;

        case "MPL":
            licenseText = `Mozilla Public License 2.0\n\nCopyright (c) ${year} ${name}

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at

    https://www.mozilla.org/MPL/2.0/`;
            break;

        case "EPL":
            licenseText = `Eclipse Public License 2.0\n\nCopyright (c) ${year} ${name}

This program and the accompanying materials are made available under the terms of the Eclipse Public License 2.0 which accompanies this distribution, and is available at

    https://www.eclipse.org/legal/epl-2.0/`;
            break;

        case "AGPL":
            licenseText = `GNU Affero General Public License v3.0\n\nCopyright (c) ${year} ${name}

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

For more details, see <https://www.gnu.org/licenses/>.`;
            break;

        case "CC":
            licenseText = `Creative Commons Attribution 4.0 International License\n\nBy ${name} in ${year}.

You are free to share, copy, and redistribute the material in any medium or format. You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

For more details, visit <https://creativecommons.org/licenses/by/4.0/>.`;
            break;

        case "Unlicense":
            licenseText = `This is free and unencumbered software released into the public domain by ${name} in ${year}.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

For more details, see <https://unlicense.org/>.`;
            break;

        case "Zlib":
            licenseText = `Zlib License\n\nCopyright (c) ${year} ${name}

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

For full details, visit <https://opensource.org/licenses/Zlib>.`;
            break;
    }

    outputArea.value = licenseText;
    licenseGenerated = true;
}

function copyLicense() {
    if (!licenseGenerated) {
        alert("Generate a license first!");
        return;
    }
    const outputArea = document.getElementById("outputArea");
    outputArea.select();
    document.execCommand("copy");
    alert("License copied!");
}

function downloadLicense() {
    if (!licenseGenerated) {
        alert("Generate a license first!");
        return;
    }
    const outputArea = document.getElementById("outputArea");
    const blob = new Blob([outputArea.value], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "license.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
