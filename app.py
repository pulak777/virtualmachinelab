from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/load_test_on_single_phase_induction_motor_to_obtain_the_performance_charecteristics/simulation')
def exp9():
    return render_template('simulations/sim9.html')

@app.route('/speed_control_of_3-phase_squirrel_cage_induction_motor_by_voltage_control')
def theo2():
    return render_template('theories/theo2.html')

@app.route('/speed_control_of_3-phase_squirrel_cage_induction_motor_by_voltage_control/simulation')
def exp2():
    return render_template('simulations/sim2.html')

@app.route('/speed_control_of_3-phase_squirrel_cage_induction_motor_by_frequency_control')
def theo3():
    return render_template('theories/theo3.html')

@app.route('/speed_control_of_3-phase_squirrel_cage_induction_motor_by_frequency_control/simulation')
def exp3():
    return render_template('simulations/sim3.html')

@app.route('/determination_of_regulation_of_synchronous_machine_by_synchronous_impedance_method')
def exp7():
    return render_template('simulations/sim7.html')

if __name__ == "__main__":
    app.run(debug=True)