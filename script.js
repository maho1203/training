<div id="step0">
    <button onclick="nextStep('face')">対面講座を選ぶ</button>
    <button onclick="nextStep('online')">オンライン講座を選ぶ</button>
</div>

<div id="step1" class="hidden">
    <p>研修タイプを選びました。次に役職を選んでください。</p>
    <button onclick="nextStep()">次へ</button>
</div>

<div id="step2" class="hidden">
    <p>役職を選んでください。</p>
    <button onclick="chooseRole('lecturer')">講師</button>
    <button onclick="chooseRole('manager')">マネージャー</button>
    <button onclick="chooseRole('assistant')">アシスタント</button>
</div>

<div id="result" class="hidden">
    <p>あなたの研修内容：</p>
    <p id="trainingDetails"></p>
    <button onclick="reset()">リセット</button>
</div>
