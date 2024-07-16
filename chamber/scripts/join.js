document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var timestampField = document.getElementById('timestamp');
    var timestampVisibleField = document.getElementById('timestampVisible');

    console.log("Timestamp field:", timestampField);
    console.log("Timestamp visible field:", timestampVisibleField);

    if (timestampField && timestampVisibleField) {
        var now = new Date();

        function formatDate(date) {
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var day = ('0' + date.getDate()).slice(-2);
            var year = date.getFullYear();
            var hours = ('0' + date.getHours()).slice(-2);
            var minutes = ('0' + date.getMinutes()).slice(-2);
            var seconds = ('0' + date.getSeconds()).slice(-2);

            return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
        }

        var formattedDateTime = formatDate(now);

        timestampField.value = formattedDateTime;
        timestampVisibleField.textContent = formattedDateTime;

        console.log("Formatted Timestamp set:", formattedDateTime);
    } else {
        console.error("Timestamp fields not found in the DOM.");
    }
});
