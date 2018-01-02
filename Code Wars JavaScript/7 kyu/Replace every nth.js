replaceNth = (text, n, oldValue, newValue) => [...text].map((i, k) => i === oldValue && k % (n + 1) ? newValue : oldValue).join('')
