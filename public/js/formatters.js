// Custom formatters for AppConnect
(function() {
    // CNPJ Formatter (99.999.999/9999-99)
    dmx.Formatter('formatCnpj', function() {
        return function(value) {
            if (!value) return value;
            
            // Remove tudo que não é dígito
            let digits = value.replace(/\D/g, '');
            
            // Limita a 14 dígitos
            digits = digits.substring(0, 14);
            
            // Aplica a máscara
            let formatted = digits;
            if (digits.length > 2) formatted = digits.substring(0, 2) + '.' + digits.substring(2);
            if (digits.length > 5) formatted = formatted.substring(0, 6) + '.' + digits.substring(5);
            if (digits.length > 8) formatted = formatted.substring(0, 10) + '/' + digits.substring(8);
            if (digits.length > 12) formatted = formatted.substring(0, 15) + '-' + digits.substring(12);
            
            return formatted;
        };
    });

    // Phone/WhatsApp Formatter ((99) 99999-9999)
    dmx.Formatter('formatPhone', function() {
        return function(value) {
            if (!value) return value;
            
            // Remove tudo que não é dígito
            let digits = value.replace(/\D/g, '');
            
            // Limita a 11 dígitos
            digits = digits.substring(0, 11);
            
            // Aplica a máscara
            let formatted = digits;
            if (digits.length > 0) formatted = '(' + digits;
            if (digits.length > 2) formatted = formatted.substring(0, 3) + ') ' + digits.substring(2);
            if (digits.length <= 10) {
                // Telefone fixo: (99) 9999-9999
                if (digits.length > 6) formatted = formatted.substring(0, 9) + '-' + digits.substring(6);
            } else {
                // Celular: (99) 99999-9999
                if (digits.length > 7) formatted = formatted.substring(0, 10) + '-' + digits.substring(7);
            }
            
            return formatted;
        };
    });

    // CEP Formatter (99999-999)
    dmx.Formatter('formatCep', function() {
        return function(value) {
            if (!value) return value;
            
            // Remove tudo que não é dígito
            let digits = value.replace(/\D/g, '');
            
            // Limita a 8 dígitos
            digits = digits.substring(0, 8);
            
            // Aplica a máscara
            let formatted = digits;
            if (digits.length > 5) formatted = digits.substring(0, 5) + '-' + digits.substring(5);
            
            return formatted;
        };
    });
})();