function calc() {
    const attack = +document.getElementById("attack").value;
    const defend = +document.getElementById("defend").value;
    const strike_val = +document.getElementById("strike_val").value;
    const strike_def = +document.getElementById("strike_def").value;
    const strike_mul = +document.getElementById("strike_mul").value / 100;
    const d_strike_rate = +document.getElementById("d_strike_rate").value / 100;
    const multiply = +document.getElementById("multiply").value / 100;
    const d_damage_rate = +document.getElementById("d_damage_rate").value / 100;
    const attack_buff = +document.getElementById("attack_buff").value / 100;
    const defend_buff = +document.getElementById("defend_buff").value / 100;
    const f_attack = attack * attack_buff;
    const f_defend = defend * defend_buff;
    const damage_eff = 2143 / (2143 + f_defend);
    const f_strike_val = Math.max(strike_val - 0.6 * strike_def, 0);
    const strike_rate = f_strike_val / (120 + 0.8 * f_strike_val);
    const f_strike_rate = strike_rate + d_strike_rate;
    const f_damage_rate = Math.max(1 + d_damage_rate, 0.3);
    const damage = f_attack * multiply * damage_eff * f_damage_rate;
    const damage_strike = damage * strike_mul;
    document.getElementById("result").innerText = `造成伤害: ${damage.toFixed(2)}\n暴击率: ${(f_strike_rate * 100).toFixed(2)}%\n暴击伤害: ${damage_strike.toFixed(2)}`;
}