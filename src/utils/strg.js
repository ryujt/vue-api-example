export default {
    getNumberStr(value) {
        if (!value) return "0";
        let unit = "";
        if (value >= 1000000) {
            value = Math.round(value / 1000000);
            unit = "M";
        } else if (value >= 1000) {
            value = Math.round(value / 1000);
            unit = "K";
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + unit;
    },

    getPriceStr(value) {
        try {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } catch (e) {
            console.log(e);
            return value;
        }
    },

    getHashTag(text) {
        if (!text) return "";

        let tags = [];
        let words = text.split(/[ ,\n]+/);
        words.forEach((word) => {
            if (word.startsWith("#")) {
                let temp = word.split("#");
                temp.forEach((item) => {
                    if (item.trim()) tags.push(item.trim());
                });
            }
        });
        const result = tags.filter((element, index) => {
            return tags.indexOf(element) === index;
        });
        return result.join(" ");
    },

    putTextAtCurrentPos(id, text, hiddenInput) {
        try {
            var element = document.getElementById(id);
            if (!element) return;

            var hidden = document.getElementById(hiddenInput);
            if (!hidden) return;

            hidden.focus();

            var strOriginal = element.value;
            var iStartPos = element.selectionStart;
            var iEndPos = element.selectionEnd;
            if (iStartPos !== iEndPos) return;

            var strFront = "";
            var strEnd = "";
            strFront = strOriginal.substring(0, iStartPos);
            strEnd = strOriginal.substring(iEndPos, strOriginal.length);
            element.value = strFront + text + strEnd;
            element.focus();
            element.selectionStart = iEndPos + 2;
            element.selectionEnd = iEndPos + 2;
        } catch (e) {
            console.log(e);
        }
    },

    trim(text) {
        try {
            return text.trim();
        } catch (e) {
            console.log(e);
            return text;
        }
    },

    toHtml(str) {
        try {
            let parser = new DOMParser();
            let string = str.replaceAll("<br>", "\n");
            return parser.parseFromString(string, "text/html").body.textContent;
        } catch (e) {
            console.log(e);
            return str;
        }
    },

    lineBreak(text) {
        return text.split('\n').join('<br />');
    },

    phoneNumber(text) {
        try {
            return text.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        } catch (e) {
            console.log(e);
            return text;
        }
    },

    /**
     * ???????????? ???????????? ????????????.
     * @param text ?????? ?????????
     */
    lineCount(text) {
        const lines = text.split("\n");
        return lines.length;
    },

    /**
     * ????????? ??????????????? ????????? ????????????.
     * @param text ?????? ?????????
     * @param size ????????? ?????? ?????? ???
     * @param lineBreak ????????????(\n)??? br ????????? ?????? ????????? ??????
     */
    shortenLines(text, size, lineBreak) {
        let lines = text.split("\n");
        lines = lines.slice(0, size);
        let result = lines.join("\n") + " ...";
        if (lineBreak) result = this.lineBreak(result);
        return result;
    },

    /**
     * ????????? count ????????? ?????? ???????????? ????????????.
     * @param count
     * @return string
     */
    randomStr(count) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < count; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },

    /**
     * ????????? ???????????? ????????? ????????? ????????????.
     * @param text ??????????????? (url) ????????? ?????????
     * @returns <a href=url target=_blank>???????????????</a>
     */
    toLink(text) {
        if (!text) return "";

        try {
            text = text.trim();

            if (text.endsWith(")")) {
                text = text.substring(0, text.length - 1).trim();
            }

            const index = text.indexOf("(");
            if (index < 0) {
                return `<a href="${text}" target="_blank">${text}</a>`;
            }

            const title = text.substring(0, index - 1);
            const url = text.substring(index + 1, text.length);

            if (title === "") {
                return `<a href="${url}" target="_blank">${url}</a>`;
            }

            return `<a href="${url}" target="_blank">${title}</a>`;
        } catch (e) {
            console.log(e);
            return text;
        }
    },

    /**
     * ????????? url ???????????? ???????????? ????????????.
     * @param url ???????????? url
     * @returns <img src=url />
     */
    toImage(url) {
        if (!url) return url;
        return `<img src="${url}" style="max-height: 50px;" />`;
    }
};
